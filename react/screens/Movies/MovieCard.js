import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import RoundedImage from '../../components/RoundedImage';
import { useTheme } from '../../hooks/useTheme';
import { deleteMovie } from '../../store';
import { MovieRate } from './MovieRate';

export const MovieCard = ({
  movie,
  setMovieToEdit,
  movieToEdit,
  categoryId,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const onDelete = useCallback(() => {
    if (movieToEdit?.id === movie.id) {
      setMovieToEdit(null);
    }

    dispatch(deleteMovie({ movieId: movie.id, categoryId }));
  }, [movieToEdit, movie, dispatch, categoryId, setMovieToEdit]);

  const onEdit = useCallback(
    () => setMovieToEdit(movie),
    [movie, setMovieToEdit],
  );

  return (
    <View style={[styles.root, theme.movieCard]}>
      <RoundedImage style={styles.image} height={190} />
      <View style={styles.cardBody}>
        <Text style={[styles.name, theme.defaultText]}>{movie.name}</Text>
        <Text numberOfLines={6} style={[styles.discription, theme.subtleText]}>
          {movie.description}
        </Text>
        <View style={styles.cardActions}>
          <MovieRate style={styles.rate} rate={movie.rate} />
          <TouchableOpacity onPress={onEdit}>
            <Text style={[styles.actionsButton, theme.edit]}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Text style={[styles.actionsButton, theme.delete]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: { flexBasis: '33%' },
  name: { fontSize: 16 },
  discription: {
    flex: 1,
    fontSize: 13,
    marginTop: 10,
    flexGrow: 1,
    padding: 0,
  },
  cardBody: {
    flex: 1,
    marginTop: 10,
    marginLeft: 15,
  },
  cardActions: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  actionsButton: {
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
  rate: {
    flexGrow: 1,
  },
});
