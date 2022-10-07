/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  // HelloScreen,
  // CounterScreen,
  // BoxModelScreen,
  // DimensionScreen,
  // PositionRelativeScreen,
  FlexBoxScreen,
} from './index';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlexBoxScreen />
    </SafeAreaView>
  );
};
