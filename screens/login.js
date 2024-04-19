import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Добавляем состояние для ошибки

  const handleLoginPress = () => {
    if (username === 'admin' && password === 'admin') {
      setError('Молодец!');
    } else {
      setError('Неверный логин или пароль'); // Устанавливаем сообщение об ошибке
    }
  };

  return (
    <View style={styles.container}>
      <Text>Логин</Text>
      <TextInput
        style={styles.input}
        placeholder="Имя пользователя"
        value={username}
        onChangeText={setUsername}
      />
      <Text>Пароль</Text>
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Войти" onPress={handleLoginPress} />
      <Text style={styles.errorText}>{error}</Text>
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
    color: 'red', // Стиль для текста ошибки
  },
});

export default Login;