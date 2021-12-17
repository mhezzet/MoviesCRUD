import { useWindowDimensions } from 'react-native';

export const useIsLandscape = () => {
  const { width, height } = useWindowDimensions();
  return width > height;
};
