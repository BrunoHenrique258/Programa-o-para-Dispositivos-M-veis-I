import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Um: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.bottom}></View>
    </View>
  );
};

export default Um;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',                // eixo vertical
    paddingTop: Constants.statusBarHeight,  // evita sobreposição com a StatusBar
  },
  top: {
    flex: 0.5,                               // metade da tela
    backgroundColor: 'crimson',
  },
  bottom: {
    flex: 0.5,                               // metade da tela
    backgroundColor: 'salmon',
  },
});
