import AsyncStorage from '@react-native-community/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { moviesCategoryReducer } from './movies';
export * from './movies';

export const store = configureStore({
  reducer: {
    moviesCategory: moviesCategoryReducer,
  },
});

store.subscribe(() =>
  AsyncStorage.setItem(
    'movies',
    JSON.stringify(store.getState().moviesCategory),
  ),
);
