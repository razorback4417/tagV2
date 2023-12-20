import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet, Text, View, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';

import TagForm from './TagForm';
import ProfilePage from './ProfilePage';
import RegistrationPage from './RegistrationPage';

function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Spinner
        visible={true}
        textContent={'TAG'}
        textStyle={styles.spinnerText}
      />
    </View>
  );
}

function RegistrationScreen({ onRegister }) {
  return (
      <View style={styles.container}>
          <RegistrationPage onRegister={onRegister} />
      </View>
  );
};

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function TagScreen() {
  return (
    <View style={styles.container}>
      <TagForm />
      <StatusBar style="auto" />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfilePage />
      <StatusBar style="auto" />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [step, setStep] = useState('loading');

  const handleRegister = (phoneNumber, name, email) => {
    // handle registration here
    setStep('app');
  };

  if (step === 'loading') {
    setTimeout(() => setStep('register'), 2000); // simulate loading for 2 seconds
    return <LoadingScreen />;
  }

  if (step === 'register') {
    return <RegistrationScreen onRegister={handleRegister} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Tag"
          component={TagScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-add" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
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