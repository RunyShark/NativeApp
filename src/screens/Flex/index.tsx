import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexBoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box1</Text>
      <Text style={styles.box2}>Box2</Text>
      <Text style={styles.box3}>Box3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  box1: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },
  box2: {
    flex: 4,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },
  box3: {
    flex: 4,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },
});
