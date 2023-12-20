import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // replace FontAwesome with the icon set you want to use

export default function ProfilePage() {
    return (
        <View style={styles.container}>
            <Image style={styles.profilePic} source={{uri: 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg'}} />
            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoText}>Name: John Doe</Text>
                    <TouchableOpacity onPress={() => {/* handle edit name */}}>
                        <Icon name="pencil" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoText}>Email: john.doe@example.com</Text>
                    <TouchableOpacity onPress={() => {/* handle edit email */}}>
                        <Icon name="pencil" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoText}>Phone: 123-456-7890</Text>
                    <TouchableOpacity onPress={() => {/* handle edit phone number */}}>
                        <Icon name="pencil" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3c2a4',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    margin: 20,
  },
    profilePic: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 20,
    },
    infoContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    infoText: {
      flex: 1,
      fontSize: 16,
    },
    pencilIcon: {
      width: 20,
      height: 20,
    },
  });