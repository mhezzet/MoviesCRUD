import React, { useCallback, useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { FormCard } from '../../components/FormCard';
import { IconTextInput } from '../../components/IconTextInput';
import { PrimaryButton } from '../../components/PrimaryButton';
import { addMovie, updateMovie } from '../../store';

export const MovieForm = ({ setMovieToEdit, movieToEdit, categoryId }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setName(!movieToEdit ? '' : movieToEdit.name);
    setDescription(!movieToEdit ? '' : movieToEdit.description);
    setRate(!movieToEdit ? '' : movieToEdit.rate[0]);
  }, [movieToEdit]);

  const onRateChange = useCallback(text => {
    if (/[1-5]{1}/.test(text) || text === '') {
      setRate(text);
    } else {
      Alert.alert('rate between 1-5');
    }
  }, []);

  const onUpdate = useCallback(() => {
    if (!name) {
      Alert.alert('name is required');
      return;
    }
    if (!rate) {
      Alert.alert('rate is required');
      return;
    }

    dispatch(
      updateMovie({
        categoryId,
        updatedMovie: { ...movieToEdit, name, rate, description },
      }),
    );
    setMovieToEdit(null);
  }, [
    categoryId,
    description,
    dispatch,
    movieToEdit,
    name,
    rate,
    setMovieToEdit,
  ]);

  const onCreate = useCallback(() => {
    if (!name) {
      Alert.alert('name is required');
      return;
    }
    if (!rate) {
      Alert.alert('rate is required');
      return;
    }

    dispatch(addMovie({ movie: { name, rate, description }, categoryId }));

    setName('');
    setDescription('');
    setRate('');
  }, [categoryId, description, dispatch, name, rate]);

  return (
    <FormCard>
      <IconTextInput
        value={name}
        onChangeText={setName}
        placeholder="Category Name"
      />
      <IconTextInput
        value={rate}
        maxChars={1}
        number
        onChangeText={onRateChange}
        placeholder="Movie Rate"
        style={styles.rate}
      />
      <IconTextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Category Description"
        style={styles.description}
      />
      <View style={styles.buttons}>
        <PrimaryButton
          style={[styles.button, movieToEdit && styles.updateButton]}
          onPress={movieToEdit ? onUpdate : onCreate}
          text={movieToEdit ? 'UPDATE' : 'ADD MOVIE'}
        />
        {movieToEdit && (
          <PrimaryButton
            danger
            style={styles.button}
            onPress={() => setMovieToEdit(null)}
            text={'CANCEL'}
          />
        )}
      </View>
    </FormCard>
  );
};

const styles = StyleSheet.create({
  rate: {
    marginTop: 20,
  },
  description: {
    marginTop: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 25,
  },
  button: {
    flex: 1,
  },
  updateButton: {
    marginRight: 10,
  },
});
