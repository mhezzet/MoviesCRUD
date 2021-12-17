import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const FormCard = ({ children }) => {
  const theme = useTheme();
  return <View style={[styles.root, theme.formCard]}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
    padding: 20,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
