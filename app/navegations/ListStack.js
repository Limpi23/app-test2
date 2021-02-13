import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import List from '../screens/List';

const Stack = createStackNavigator();

export default function ListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="list"
        component={List}
        options={{title: 'List'}}></Stack.Screen>
    </Stack.Navigator>
  );
}
