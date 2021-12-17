import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { generateRandomImageSource } from '../utils/generateRandomImageSource';

const RoundedImage = ({ height = 300, width = '100%', style }) => {
  const theme = useTheme();
  const [imageSource] = useState(generateRandomImageSource());

  return (
    <View style={[styles.imageWraper, theme.imageShadow, style]}>
      <Image style={[styles.image, { height, width }]} source={imageSource} />
    </View>
  );
};

export default RoundedImage;

const styles = StyleSheet.create({
  imageWraper: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
