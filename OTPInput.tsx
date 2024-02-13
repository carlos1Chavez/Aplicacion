import { View, TextInput, Text, TouchableOpacity, StyleSheet, TextStyle, ViewStyle, Image, ImageStyle } from 'react-native';
import Svg, { Polygon, Rect } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

interface OTPInputProps {
  length: number;
  code: string;
  onCodeChange: (code: string) => void;
}

const OTPInput: React.FunctionComponent<OTPInputProps> = ({ length, code, onCodeChange }) => {
  const navigation = useNavigation();
  const [otpInputs, setOTPInputs] = useState<string[]>(new Array(length).fill(''));
  const handleInputChange = (index: number, value: string) => {
    const newOTPInputs = [...otpInputs];
    newOTPInputs[index] = value;
    setOTPInputs(newOTPInputs);

    if (value.length === 1 && index < length - 1) {
      newOTPInputs[index + 1] = '';
      setOTPInputs(newOTPInputs);
    }

    if (value.length === 0) {
      return;
    }

    if (index === length - 1 && value.length === 1) {
      onCodeChange(newOTPInputs.join(''));
    }
  };

  const handleButtonPress = () => {
    // Navegar a la pantalla MyForm
    navigation.navigate('MyForm');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.holaMundoText}>Solo tiene que ingresar un código OTP que le enviamos por SMS a su número de teléfono registrado + 12345565</Text>
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          {otpInputs.map((input, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleInputChange(index, value)}
            />
          ))}
        </View>
        <View style={styles.inputContainer}>
          {otpInputs.map((input, index) => (
            <TextInput
              key={index + length}
              style={styles.input}
              value={input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleInputChange(index + length, value)}
            />
          ))}
        </View>
        <View style={styles.inputContainer}>
          {otpInputs.map((input, index) => (
            <TextInput
              key={index + length * 2}
              style={styles.input}
              value={input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleInputChange(index + length * 2, value)}
            />
          ))}
        </View>
        <View style={styles.inputContainer}>
          {otpInputs.map((input, index) => (
            <TextInput
              key={index + length * 3}
              style={styles.input}
              value={input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleInputChange(index + length * 1, value)}
            />
          ))}
        </View>
      </View>
      <Image
        style={styles.logo}
        source={require('./imagenes/Logo_starbucks.png')}
      />
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

interface Styles {
  container: ViewStyle;
  row: ViewStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
  holaMundoText: TextStyle;
  logo: ImageStyle;
  circularButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginRight: 10,
    marginHorizontal: 10,
    width: '10%',
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    marginRight: 10,
  },
  holaMundoText: {
    color: 'green',
    fontSize: 14,
    marginBottom: 10,
    margin: 50,
  },
  logo: {
    position: 'absolute',
    bottom: -660,
    left: -250,
    width: 550,
    height: 550,
    opacity: 0.3,
  },
  circularButton: {
    position: 'absolute',
    bottom: '-150%',
    backgroundColor: '#19940f',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'green',
    right: 25,
  },
});

export default OTPInput;
