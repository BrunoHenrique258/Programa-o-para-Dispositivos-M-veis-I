import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Exercicio3: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Parte superior (crimson) dividida horizontalmente */}
      <View style={styles.top}>
        {/* Coluna esquerda */}
        <View style={styles.left}>
          <View style={styles.leftTop}></View>
          <View style={styles.leftBottom}></View>
        </View>

        {/* Coluna direita */}
        <View style={styles.right}>
          <View style={styles.rightTop}></View>
          <View style={styles.rightBottom}></View>
        </View>
      </View>

      {/* Parte inferior (salmon) permanece igual */}
      <View style={styles.bottom}></View>
    </View>
  );
};

export default Exercicio3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
  },
  top: {
    flex: 0.5,
    flexDirection: 'row',  // eixo horizontal
    backgroundColor: 'crimson',
  },
  left: {
    flex: 0.5,
    flexDirection: 'column', // divide verticalmente
  },
  right: {
    flex: 0.5,
    flexDirection: 'column', // divide verticalmente
  },
  leftTop: {
    flex: 0.5,
    backgroundColor: 'lime',
  },
  leftBottom: {
    flex: 0.5,
    backgroundColor: 'teal',
  },
  rightTop: {
    flex: 0.5,
    backgroundColor: 'aquamarine',
  },
  rightBottom: {
    flex: 0.5,
    backgroundColor: 'skyblue',
  },
  bottom: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});
