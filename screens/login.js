// screens/login.js

import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function Login() {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Логин" />
            <TextInput placeholder="Пароль" secureTextEntry={true} />
            <Button title="Войти" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Login;