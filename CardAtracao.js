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
      backgroundColor: '#E8F0C1',
    }}
  >
    <View
      style={{
        width: 10,
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

export default CardAtracao;