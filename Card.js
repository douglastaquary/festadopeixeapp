import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; 
import { sliderItemWidth, sliderItemHorizontalMargin, slideWidth } from './styles';

const Card = ({ imagem }) => (
  <View
    style={{
      width: sliderItemWidth,
      height: 200,
      paddingHorizontal: sliderItemHorizontalMargin,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E8F0C1',
    }}
  >
    <View
      style={{
        width: slideWidth,
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={{ uri: imagem }}
          style={styles.canvas}
          resizeMode="contain" 
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
    imagem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: sliderItemWidth,
        height: 400,
    },
    canvas: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }
});

export default Card;