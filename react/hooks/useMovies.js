import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, deleteMovie, updateMovie } from '../store';
import { useMoviesCategory } from './useMoviesCategory';

export const useMovies = ({ categoryId }) => {
  const { moviesCategory } = useMoviesCategory();

  const movies = useMemo(
    () =>
      moviesCategory.find(category => category.id === categoryId)?.movies ?? [],
    [categoryId, moviesCategory],
  );

  return { movies };
};
