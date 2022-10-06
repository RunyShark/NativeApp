/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <Text>1+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCounter(counter - 1)}>
        <Text>1-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCounter(0)}>
        <Text>restart</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
