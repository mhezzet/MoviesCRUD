import React from 'react';
import { FlatList } from 'react-native';
import { useIsLandscape } from '../../hooks/useIsLandscape';
import { CategoryCard } from './CategoryCard';

export const CategoriesList = ({ categories, onCategoryPress }) => {
  const isLandscape = useIsLandscape();

  return isLandscape ? (
    <FlatList
      key={'_'}
      numColumns={4}
      data={categories}
      renderItem={({ item: category }) => (
        <CategoryCard
          onPress={() => onCategoryPress(category)}
          category={category}
        />
      )}
      keyExtractor={category => '_' + category.id}
    />
  ) : (
    <FlatList
      key={'#'}
      numColumns={2}
      data={categories}
      renderItem={({ item: category }) => (
        <CategoryCard
          onPress={() => onCategoryPress(category)}
          category={category}
        />
      )}
      keyExtractor={category => '#' + category.id}
    />
  );
};
