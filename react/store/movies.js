import { createSlice } from '@reduxjs/toolkit';
import { generateRandomNumber } from '../utils/generateRandomNumber';

const moviesCategorySlice = createSlice({
  name: 'moviesCategory',
  initialState: null,
  reducers: {
    setMovies: (_, { payload: categories }) => categories,
    addMovie: (categories, { payload: { movie, categoryId } }) =>
      categories.map(category =>
        category.id === categoryId
          ? {
              ...category,
              movies: [
                { ...movie, id: generateRandomNumber() },
                ...category.movies,
              ],
            }
          : category,
      ),
    updateMovie: (categories, { payload: { categoryId, updatedMovie } }) =>
      categories.map(category =>
        category.id === categoryId
          ? {
              ...category,
              movies: category.movies.map(movie =>
                movie.id === updatedMovie.id ? updatedMovie : movie,
              ),
            }
          : category,
      ),
    deleteMovie: (categories, { payload: { movieId, categoryId } }) =>
      categories.map(category =>
        category.id === categoryId
          ? {
              ...category,
              movies: category.movies.filter(movie => movie.id !== movieId),
            }
          : category,
      ),
    createCategory: (categories, { payload: { category } }) => [
      { id: generateRandomNumber(), movies: [], ...category },
      ...categories,
    ],
  },
});

export const moviesCategoryReducer = moviesCategorySlice.reducer;

export const { addMovie, createCategory, deleteMovie, setMovies, updateMovie } =
  moviesCategorySlice.actions;
