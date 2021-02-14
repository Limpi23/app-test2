import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import List from '../screens/List';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

export default function ListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="list"
        component={List}
        options={{
          title: 'User List',
          headerStyle: {
            backgroundColor: '#2D2C3C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'arial',
          },
        }}></Stack.Screen>
      <Stack.Screen
        name="detail"
        component={Detail}
        options={{
          title: 'Detail User',
          headerStyle: {
            backgroundColor: '#2D2C3C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'arial',
          },
        }}></Stack.Screen>
    </Stack.Navigator>
  );
}
