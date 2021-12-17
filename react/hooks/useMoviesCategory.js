import AsyncStorage from '@react-native-community/async-storage';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moviesInit from '../../movies-data.json';
import { createCategory, setMovies } from '../store';

export const useMoviesCategory = () => {
  const moviesCategory = useSelector(state => state.moviesCategory);
  const dispatch = useDispatch();

  // AsyncStorage.removeItem('movies');

  useEffect(() => {
    if (moviesCategory) {
      return;
    }

    AsyncStorage.getItem('movies').then(storedMovies => {
      if (!storedMovies) {
        dispatch(setMovies(moviesInit.categories));
      } else {
        dispatch(setMovies(JSON.parse(storedMovies)));
      }
    });
  }, [dispatch, moviesCategory]);

  const newCategory = useCallback(
    category => dispatch(createCategory(category)),
    [dispatch],
  );

  return { moviesCategory, newCategory };
};
