import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Map from '../screens/Map';

const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="map"
        component={Map}
        options={{
          title: 'Map',
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
