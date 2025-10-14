import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import fatecLogo from '../assets/fatec.png'; 

const Exercicio11: React.FC = () => {
  
  const botoes = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Image source={fatecLogo} style={styles.logo} resizeMode="contain" />

      <View style={styles.buttonsContainer}>
        {botoes.map((num) => (
          <TouchableOpacity key={num} style={styles.button}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Exercicio11;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '45%', /* cada botão ocupa cerca de 45% da largura (2 colunas) */
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
