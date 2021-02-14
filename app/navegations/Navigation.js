import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeStack from './HomeStack';
import MapStack from './MapStack';
import ListStack from './ListStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        tabBarOptions={{
          inactiveTintColor: '#646464',
          activeTintColor: '#65D9E4',
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{title: 'Home'}}></Tab.Screen>
        <Tab.Screen
          name="map"
          component={MapStack}
          options={{title: 'Map'}}></Tab.Screen>
        <Tab.Screen
          name="list"
          component={ListStack}
          options={{title: 'List'}}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case 'home':
      iconName = 'home';
      break;
    case 'map':
      iconName = 'map';
      break;
    case 'list':
      iconName = 'account';
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
