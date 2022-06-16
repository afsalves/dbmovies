import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from 'src/routes/bottom.routes';

const Routes: React.FC = () => {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="BottomNavigation"
        screenOptions={{headerShown: false}}
      >
        <Screen name="BottomNavigation" component={BottomNavigation} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
