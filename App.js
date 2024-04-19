import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './screens/login.js';
import RandomUser from './screens/randomuser.js';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="RandomUser" component={RandomUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
