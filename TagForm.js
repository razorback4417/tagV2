import React, { useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, TextInput, Button, Provider, Card, Surface } from 'react-native-paper';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';

export default function TagForm() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <MenuProvider>
      <Provider>
        <View style={styles.container}>
          <Surface style={styles.surface}>
            <Card style={styles.card}>
              <Card.Content>
                <View style={{ padding: 10 }}>
                  <Text style={{ fontWeight: 'bold', color: 'black', marginBottom: 5 }}>Date and Time</Text>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="datetime"
                      display="default"
                      onChange={onChange}
                      minuteInterval={30}
                    />
                  )}
                </View>
                <View style={{ padding: 10 }}>
                  <Text style={{ fontWeight: 'bold', color: 'black', marginBottom: 5 }}>Pick up location</Text>
                  <Menu>
                    <MenuTrigger customStyles={triggerStyles} text='Select location' />
                    <MenuOptions customStyles={optionsStyles}>
                      <MenuOption onSelect={() => setSelectedLocation('A')}><Text>A</Text></MenuOption>
                      <MenuOption onSelect={() => setSelectedLocation('B')}><Text>B</Text></MenuOption>
                      <MenuOption onSelect={() => setSelectedLocation('C')}><Text>C</Text></MenuOption>
                    </MenuOptions>
                  </Menu>
                </View>
                <View style={{ padding: 10 }}>
                  <Text style={{ fontWeight: 'bold', color: 'black', marginBottom: 5 }}>Destination</Text>
                  <Menu>
                    <MenuTrigger customStyles={triggerStyles} text='Select destination' />
                    <MenuOptions customStyles={optionsStyles}>
                      <MenuOption onSelect={() => setSelectedDestination('X')}><Text>X</Text></MenuOption>
                      <MenuOption onSelect={() => setSelectedDestination('Y')}><Text>Y</Text></MenuOption>
                      <MenuOption onSelect={() => setSelectedDestination('Z')}><Text>Z</Text></MenuOption>
                    </MenuOptions>
                  </Menu>
                </View>
              </Card.Content>
            </Card>
          </Surface>
        </View>
      </Provider>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#8ab288',
  },
  surface: {
    borderRadius: 10,
    padding: 10,
    elevation: 4,
    backgroundColor: '#a3c2a4',
  },
  card: {
    borderRadius: 10,
  },
  input: {
    marginTop: 20,
  },
});

const optionsStyles = {
  optionsContainer: {
    borderRadius: 10,
    padding: 5,
    marginTop: -55,
  },
  optionWrapper: {
    margin: 5,
  },
};

const triggerStyles = {
  triggerOuterWrapper: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#e7e4ea',
  },
  triggerText: {
    color: 'black',
  },
};