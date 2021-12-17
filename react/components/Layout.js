import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.root, theme.background]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
});
