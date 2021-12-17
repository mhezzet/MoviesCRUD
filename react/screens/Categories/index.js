import React, { useCallback } from 'react';
import { Navigation } from 'react-native-navigation';
import { Layout } from '../../components/Layout';
import { useMoviesCategory } from '../../hooks/useMoviesCategory';
import { CategoriesList } from './CategoriesList';
import { CreateCategory } from './CreateCategory';

export const Categories = ({ componentId }) => {
  const { moviesCategory } = useMoviesCategory();

  const onCategoryPress = useCallback(
    category => {
      Navigation.push(componentId, {
        component: {
          name: 'Movies',
          passProps: { categoryId: category.id },
          options: {
            topBar: {
              title: {
                text: category.name,
              },
            },
          },
        },
      });
    },
    [componentId],
  );

  if (!moviesCategory) {
    return null;
  }

  return (
    <Layout>
      <CreateCategory />
      <CategoriesList
        categories={moviesCategory}
        onCategoryPress={onCategoryPress}
      />
    </Layout>
  );
};

Categories.options = {
  topBar: {
    title: {
      text: 'Movies Categories',
    },
  },
};
