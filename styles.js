import { Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

function wp(percentage) {
  const value = percentage * viewportWidth / 100;
  return Math.round(value);
}

export const slideWidth = wp(80.4);
export const slideAtracaoWidth = wp(30.4);
export const sliderItemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const sliderItemWidth = slideWidth + sliderItemHorizontalMargin;