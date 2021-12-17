import { useColorScheme } from 'react-native';
import { themes } from '../themes';

export const useTheme = () => {
  const colorMode = useColorScheme();

  return themes[colorMode];
};
