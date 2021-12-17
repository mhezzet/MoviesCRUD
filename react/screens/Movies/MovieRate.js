import React from 'react';
import { Text, View } from 'react-native';

export const MovieRate = ({ rate = '5', style }) => {
  return (
    <View style={style}>
      <Text>
        {Array.from({ length: Math.floor(Number(rate)) }, () => '⭐️')}
      </Text>
    </View>
  );
};
