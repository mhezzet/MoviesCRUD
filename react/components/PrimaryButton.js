import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const PrimaryButton = ({
  text = '',
  style,
  onPress,
  danger = false,
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.root,
        style,
        danger ? theme.dangerButtonBackground : theme.defaultButtonBackground,
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={[styles.text, theme.defaultButtonColor]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
