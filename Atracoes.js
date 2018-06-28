import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';

import AtracoesItem from './AtracoesItem';

import { sliderWidth, sliderItemWidth } from './styles';

import Carousel from 'react-native-snap-carousel';

import CardAtracao from './CardAtracao';


class Atracoes extends Component {

    state = {
    atracoes: [
      {
        imagem: 'https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/cachoeira_urubu.jpg'
      },
      {
        imagem: 'https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/esp_cachoeira.jpg'
      },
      {
        imagem: 'https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/esp_vista_alto.jpg'
      }
    ],
  };


  static navigationOptions = {
    title: 'Atrações'
  };

  componentDidMount() {
	const { programacao_cultural } = this.props.navigation.state.params;
  }

  renderItem = ({ item }) => (
      <AtracoesItem
      id={item.id}
      title={item.nome}
      estilo={item.descricao}
      horario={item.horario}
    />
  );

  _keyExtractor = (item, index) => index.toString();

    renderListComponent = ({ item }) => (
      <CardAtracao imagem={item.imagem}/>
    );

  render() {

	const { programacao_cultural } = this.props.navigation.state.params;

    return (

      <ScrollView style={{backgroundColor: '#E8F0C1'}}>
        <Carousel
          data={this.state.atracoes}
          renderItem={this.renderListComponent}
          sliderWidth={sliderWidth}
          itemWidth={sliderItemWidth}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />

        <View style={styles.container}>
          <StatusBar
            barStyle="dark-content"
          />
          <FlatList
            styles={styles.container}
            data={programacao_cultural}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EEC0',
  }
});


const mapStateToProps = ({ programacao_cultural}) => ({
  programacao_cultural
});


export default connect(mapStateToProps)(Atracoes);