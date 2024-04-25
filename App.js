import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { configureStore } from '@reduxjs/toolkit'; // Используем configureStore из Redux Toolkit
import rootReducer from './screens/reducers'; // Импортируем корневой редьюсер

// Импортируем компоненты экранов
import LoginScreen from './screens/login.js';
import RandomUser from './screens/randomuser.js';

// Создаем стек навигатор
const Stack = createStackNavigator();

// Используем configureStore для создания Redux store
const reduxStore = configureStore({
  reducer: rootReducer, // Передаем корневой редьюсер
});

const App = () => {
  return (
    <Provider store={reduxStore}>
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
    </Provider>
  );
};

export default App;
