import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';
import LoginForm from './LoginForm';
import OTPInput from './OTPInput';
import MyForm from './MyForm';
import HomeScreen from './Home';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="OTPInput" component={OTPInput} />
        <Stack.Screen name="MyForm" component={MyForm} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;