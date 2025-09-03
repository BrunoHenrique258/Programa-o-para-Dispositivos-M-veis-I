// src/screens/exercicio2.tsx
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const Exercicio2 = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Container crimson que terá flexDirection row */}
      <View style={styles.crimsonContainer}>
        <View style={styles.lime} />
        <View style={styles.aquamarine} />
      </View>

      {/* Parte salmon continua igual */}
      <View style={styles.salmon} />
    </View>
  );
};

export default Exercicio2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
  },
  crimsonContainer: {
    flex: 0.5,
    backgroundColor: 'crimson',
    flexDirection: 'row',  // muda para linha
  },
  lime: {
    flex: 0.5,
    backgroundColor: 'lime',
  },
  aquamarine: {
    flex: 0.5,
    backgroundColor: 'aquamarine',
  },
  salmon: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});
