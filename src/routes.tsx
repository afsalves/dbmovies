import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@modules/Home'
import Favorites from '@modules/Favorites'

const Routes = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="Favorites" component={Favorites} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
