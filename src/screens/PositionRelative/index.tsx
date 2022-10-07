import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionRelativeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple} />
      <View style={styles.boxOrigen} />
      <View style={styles.boxGreen} />
      <View style={styles.boxRed} />
      <View style={styles.boxYellow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    backgroundColor: '#28C4D9',
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  boxOrigen: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  boxGreen: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  boxRed: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 150,
    left: 150,
  },
  boxYellow: {
    width: 100,
    height: 100,
    backgroundColor: '#ffe600',
    borderWidth: 10,
    borderColor: 'white',
  },
});
