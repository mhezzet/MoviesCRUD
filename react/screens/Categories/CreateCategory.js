import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { FormCard } from '../../components/FormCard';
import { IconTextInput } from '../../components/IconTextInput';
import { PrimaryButton } from '../../components/PrimaryButton';
import { createCategory } from '../../store/movies';

export const CreateCategory = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const onCreate = useCallback(() => {
    if (!name) {
      Alert.alert('Name is required');
      return;
    }
    dispatch(createCategory({ category: { name, description } }));
    setName('');
    setDescription('');
  }, [description, dispatch, name]);

  return (
    <FormCard>
      <IconTextInput
        value={name}
        onChangeText={setName}
        placeholder="Category Name"
      />
      <IconTextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Category Description"
        style={styles.description}
      />
      <PrimaryButton style={styles.button} text="CREATE" onPress={onCreate} />
    </FormCard>
  );
};

const styles = StyleSheet.create({
  description: {
    marginTop: 20,
  },
  button: {
    marginTop: 25,
  },
});
