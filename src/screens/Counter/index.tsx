/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  const hadleTouch = (n: number) => {
    setCounter(counter + n);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -40,
          color: 'black',
        }}>
        Counter: {counter}
      </Text>
      <Button onPress={() => hadleTouch(1)} title="+" />

      <Button onPress={() => hadleTouch(-1)} title="-" />

      <Button onPress={() => setCounter(0)} title="reset" />
    </View>
  );
};
