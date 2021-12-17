const imageSources = [
  require('../../assets/images/posters/01.descarga-carteles-antiguos-cine-alta-resolucion-original-original.jpg'),
  require('../../assets/images/posters/02.descarga-carteles-antiguos-cine-alta-resolucion-original-original.jpg'),
  require('../../assets/images/posters/05.descarga-carteles-antiguos-cine-alta-resolucion-original-original.jpg'),
  require('../../assets/images/posters/06.descarga-carteles-antiguos-cine-alta-resolucion-original-original.jpg'),
  require('../../assets/images/posters/07.descarga-carteles-antiguos-cine-alta-resolucion-original-original.jpg'),
  require('../../assets/images/posters/08.descarga-carteles-antiguos-cine-alta-resolucion-original-original.jpg'),
  require('../../assets/images/posters/09.descarga-carteles-antiguos-cine-alta-resolucion-original-original.jpg'),
  require('../../assets/images/posters/10.descarga-carteles-antiguos-cine-alta-resolucion-original-original.jpg'),
  require('../../assets/images/posters/12.descarga-carteles-antiguos-cine-alta-resolucion-original-original.jpg'),
  require('../../assets/images/posters/13.descarga-carteles-antiguos-cine-alta-resolucion-original-original.jpg'),
];

export const generateRandomImageSource = () => {
  return imageSources[Math.floor(Math.random() * 10)];
};
