import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const IconTextInput = ({
  style,
  placeholder = '',
  value = '',
  onChangeText,
  number = false,
  maxChars,
}) => {
  const theme = useTheme();

  return (
    <View style={[styles.root, style, theme.inputTextBorder]}>
      <Text>🏬</Text>
      <TextInput
        keyboardType={number ? 'numeric' : 'default'}
        {...(maxChars && { maxLength: maxChars })}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        style={[styles.input, theme.defaultText]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 18,
    marginLeft: 7,
  },
});
