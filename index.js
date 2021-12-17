import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { Categories } from './react/screens/Categories';
import { Movies } from './react/screens/Movies';
import { store } from './react/store';

Navigation.registerComponent(
  'Categories',
  () => props =>
    (
      <Provider store={store}>
        <Categories {...props} />
      </Provider>
    ),
  () => Categories,
);

Navigation.registerComponent(
  'Movies',
  () => props =>
    (
      <Provider store={store}>
        <Movies {...props} />
      </Provider>
    ),
  () => Movies,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Categories',
            },
          },
        ],
      },
    },
  });
});
