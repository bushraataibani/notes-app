import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator/BottomTabNavigator';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={BottomTabNavigator}
          options={{headerShown: false, cardStyle: {backgroundColor: '#fff'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
