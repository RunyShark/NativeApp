import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type position = 'fabLocationBL' | 'fabLocationBR' | 'fabLocationCenter';

interface FabProps {
  title: string;
  onPress: () => void;
  position: position;
}

export const Fab = ({title, onPress, position}: FabProps) => {
  return (
    <TouchableOpacity style={styles[position]} onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
