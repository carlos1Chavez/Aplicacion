import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, TextStyle, ViewStyle, Image, ImageStyle } from 'react-native';
import Svg, { Polygon, Rect } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const MyForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const handleButtonPress = () => {
    // Redirigir a la pantalla HomeScreen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Por favor complete algunos detalles a continuación </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre completo</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={text => setFullName(text)}
        />
        <View style={styles.line} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <View style={styles.line} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Numero telefonico</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
        <View style={styles.line} />
      </View>

      {/* Botón Agregado */}
      <TouchableOpacity style={styles.circularButton} onPress={handleButtonPress}>
        <Svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
        >
          <Rect width="32" height="32" fill="none" />
          <Polygon points="28 16 21 9 19.586 10.414 24.172 15 4 15 4 17 24.172 17 19.586 21.586 21 23 28 16" fill="#fefffe" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  headerText: {
    color: 'green',
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: 'green',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 10,
    width: '100%',
  },
  line: {
    height: 0,
    backgroundColor: '#ccc',
    width: '100%',
    marginTop: 5,
  },
  circularButton: {
    position: 'absolute',
    bottom: 40,
    right: 5,
    backgroundColor: '#19940f',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default MyForm;
