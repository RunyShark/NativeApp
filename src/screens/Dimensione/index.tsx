import React from 'react';
import {
  StyleSheet,
  View,
  // Dimensions,
  Text,
  useWindowDimensions,
} from 'react-native';

export const DimensionScreen = () => {
  // const {height, width} = Dimensions.get('window'); // no change rotation
  const {height, width} = useWindowDimensions(); // change rotation
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.boxPurple, width: width * 0.5}} />
        <View style={styles.boxOrange} />
      </View>
      <Text style={styles.title}>
        W: {width} H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'red',
  },
  boxPurple: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  boxOrange: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
