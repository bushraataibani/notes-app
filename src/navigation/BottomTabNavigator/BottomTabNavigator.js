import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Category from '../../screens/Category/Category';
import NotesList from '../../screens/NotesList/NotesList';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#999',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={NotesList}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name={'home'} size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Category'}
        component={Category}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name={'category'} size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
