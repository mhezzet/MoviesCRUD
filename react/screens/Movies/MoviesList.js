import React from 'react';
import { FlatList } from 'react-native';
import { MovieCard } from './MovieCard';

export const MoviesList = ({
  movies,
  setMovieToEdit,
  movieToEdit,
  categoryId,
}) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item: movie }) => (
        <MovieCard
          movie={movie}
          movieToEdit={movieToEdit}
          setMovieToEdit={setMovieToEdit}
          categoryId={categoryId}
        />
      )}
      keyExtractor={movie => movie.id}
    />
  );
};
