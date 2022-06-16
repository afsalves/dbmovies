import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@modules/Home'
import Favorites from '@modules/Favorites'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import fonts from '../global/styles/fonts'

const {Navigator, Screen} = createBottomTabNavigator();

const BottomNavigation: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {color: 'white', fontSize: 15, fontFamily:fonts.heading},
        tabBarStyle: {
          backgroundColor: 'black',
          height: 100,
          borderTopColor: 'white',
          borderTopWidth: 0.5,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({size, focused}) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={focused ? 'red' : 'white'}
            />
          ))
        }}
      />

      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: (({size, focused}) => (
            <MaterialIcons
              name="favorite-outline"
              size={size}
              color={focused ? 'red' : 'white'}
            />
          ))
        }}
      />
    </Navigator>
  );
};

export default BottomNavigation;
