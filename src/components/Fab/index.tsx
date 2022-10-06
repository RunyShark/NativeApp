import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  // TouchableOpacity,
  View,
} from 'react-native';

type position = 'fabLocationBL' | 'fabLocationBR' | 'fabLocationCenter';

interface FabProps {
  title: string;
  onPress: () => void;
  position: position;
}

export const Fab = ({title, onPress, position}: FabProps) => {
  return (
    <View style={styles[position]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#454a4b', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
