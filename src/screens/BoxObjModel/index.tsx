import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxModelScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}>BoxModelScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    padding: 50,
    fontSize: 20,
    width: 150,
    borderWidth: 10,
  },
});
