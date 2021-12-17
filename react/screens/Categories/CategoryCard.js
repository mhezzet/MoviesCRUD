import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import RoundedImage from '../../components/RoundedImage';
import { useTheme } from '../../hooks/useTheme';

export const CategoryCard = ({ category, onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <RoundedImage />
      <Text style={[styles.name, theme.defaultText]}>{category.name}</Text>
      <Text style={[styles.description, theme.description]}>
        {category.description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 5, paddingBottom: 25 },
  name: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
    marginLeft: 5,
  },
  description: {
    fontSize: 14,
    marginTop: 4,
    marginLeft: 5,
  },
});
