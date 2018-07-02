import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; 
import { sliderItemWidth, slideAtracaoWidth, sliderItemHorizontalMargin, slideWidth } from './styles';

const CardAtracao = ({ imagem }) => (
  <View
    style={{
      width: sliderItemWidth,
      height: 200,
      paddingHorizontal: sliderItemHorizontalMargin,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <View
      style={{
        width: slideAtracaoWidth,
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
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

export default CardAtracao;