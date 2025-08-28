import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import logo from '../assets/adaptive-icon.png'; 

const Exercicio4: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Parte superior (crimson) dividida horizontalmente e verticalmente */}
      <View style={styles.top}>
        <View style={styles.left}>
          <View style={styles.leftTop}></View>
          <View style={styles.leftBottom}></View>
        </View>

        <View style={styles.right}>
          <View style={styles.rightTop}></View>
          <View style={styles.rightBottom}></View>
        </View>
      </View>

      {/* Parte inferior (salmon) */}
      <View style={styles.bottom}>
        <Image
          source={logo}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Exercicio4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
  },
  top: {
    flex: 0.5,
    flexDirection: 'row',
  },
  left: {
    flex: 0.5,
    flexDirection: 'column',
  },
  right: {
    flex: 0.5,
    flexDirection: 'column',
  },
  leftTop: { flex: 0.5, backgroundColor: 'lime' },
  leftBottom: { flex: 0.5, backgroundColor: 'teal' },
  rightTop: { flex: 0.5, backgroundColor: 'aquamarine' },
  rightBottom: { flex: 0.5, backgroundColor: 'skyblue' },
  bottom: {
    flex: 0.5,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
  },
});
