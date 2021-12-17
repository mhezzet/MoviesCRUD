import React, { useState } from 'react';
import { Layout } from '../../components/Layout';
import { useMovies } from '../../hooks/useMovies';
import { MovieForm } from './MovieForm';
import { MoviesList } from './MoviesList';

export const Movies = ({ categoryId }) => {
  const [movieToEdit, setMovieToEdit] = useState(null);
  const { movies } = useMovies({ categoryId });

  return (
    <Layout>
      <MovieForm
        setMovieToEdit={setMovieToEdit}
        movieToEdit={movieToEdit}
        categoryId={categoryId}
      />
      <MoviesList
        categoryId={categoryId}
        movies={movies}
        setMovieToEdit={setMovieToEdit}
        movieToEdit={movieToEdit}
      />
    </Layout>
  );
};
