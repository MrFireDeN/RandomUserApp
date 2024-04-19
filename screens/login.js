import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const Login = ({ onLogin, navigation }) => { // Добавляем navigation в пропсы
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginPress = () => {
    if (username === 'admin' && password === 'admin') {
      if (navigation) {
        navigation.navigate('RandomUser'); // Используем navigation.navigate для перехода
      } else {
        console.error('Navigation is undefined');
      }
    } else {
      setError('Неверный логин или пароль');
      alert('Неверный логин или пароль');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => handleLoginPress} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    width: '80%',
    padding: 10,
  },
  errorText: {
    color: 'red',
  },
});

export default Login;