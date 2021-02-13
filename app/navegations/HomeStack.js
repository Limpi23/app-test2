import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
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
