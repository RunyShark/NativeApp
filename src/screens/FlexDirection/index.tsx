import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexBoxDirectionScreen = () => {
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
    flexDirection: 'row',
    backgroundColor: '#28C4D9',
  },
  box1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },
  box2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },
  box3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },
});
