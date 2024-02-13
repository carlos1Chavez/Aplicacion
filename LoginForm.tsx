import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OTPInput from './OTPInput';  

const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    
    navigation.navigate('OTPInput');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./imagenes/logo_registro.png')}
      />
      <Text style={styles.loginText}>Registrar con correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={!showPassword}
      />
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.showPasswordButton} onPress={toggleShowPassword}>
          <Text style={styles.showPasswordButtonText}>
            {showPassword ? 'Hide Password' : 'Show Password'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acceder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 350, 
    height: 175, 
    marginBottom: 10,
    borderRadius: 15,
  },
  loginText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#006400', 
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  forgotPasswordButton: {
    flex: 1,
  },
  showPasswordButton: {
    flex: 1,
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: '#006400',
    fontSize: 14,
    textAlign: 'left',
  },
  showPasswordButtonText: {
    color: '#006400',
    fontSize: 14,
    textAlign: 'right',
  },
  signInButton: {
    width: '60%',
    height: 40,
    backgroundColor: '#006400',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginForm;
