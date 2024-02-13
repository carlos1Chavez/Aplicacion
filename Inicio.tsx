import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Inicio = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate('LoginForm');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        contentInsetAdjustmentBehavior="automatic">
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            style={styles.fotoperfil}
            source={require('./imagenes/Logo_starbucks.png')}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fotoperfil: {
    width: 280,
    height: 280,    
  },
});

export default Inicio;
