import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; 
import { sliderItemWidth, sliderItemHorizontalMargin, slideWidth } from './styles';

const Card = ({ imagem }) => (
  <View
    style={{
      width: sliderItemWidth,
      height: 150,
      paddingHorizontal: sliderItemHorizontalMargin,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    }}
  >
    <View
      style={{
        width: slideWidth,
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <Image source={{ uri: imagem }}
          style={styles.imagem}
          resizeMode="contain" 
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
    imagem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: sliderItemWidth-2,
        height: 400,
    },
});

export default Card;