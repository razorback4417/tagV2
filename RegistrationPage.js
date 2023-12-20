import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function RegistrationPage({ onRegister }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        mode="outlined"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode="outlined"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        placeholderTextColor="#A9A9A9"
      />
      <TouchableOpacity onPress={() => onRegister(phoneNumber, name, email)} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#fff',
      color: "#A9A9A9",
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      height: 50,
      marginBottom: 10,
      backgroundColor: '#e7e4ea',
      color: '#000000'
    },
    button: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#a3c2a4',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    spinnerText: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 30,
    },
    datePicker: {
      width: 200,
      marginBottom: 20,
    },
    map: {
      width: '100%',
      height: 200,
      marginBottom: 20,
    },
  });