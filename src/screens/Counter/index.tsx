/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../../index';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <Fab
        title="+1"
        onPress={() => setCounter(counter + 1)}
        position="fabLocationBL"
      />
      <Fab
        title="-1"
        onPress={() => setCounter(counter - 1)}
        position="fabLocationBR"
      />
      <Fab
        title="reset"
        onPress={() => setCounter(0)}
        position="fabLocationCenter"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
  },
  title: {
    fontSize: 40,
    top: -15,
    textAlign: 'center',
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationCenter: {
    position: 'absolute',
  },
  fab: {
    backgroundColor: '#61dafb',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
