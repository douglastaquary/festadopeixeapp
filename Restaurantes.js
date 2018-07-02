import React, { Component } from 'react';
import { 
  View, 
  Text, 
  ActivityIndicator, 
  FlatList, 
  StyleSheet,
  SafeAreaView,
  ScrollView 
} from 'react-native';

import { Tile } from 'react-native-elements';


import { connect } from 'react-redux';

import { getRestaurantes } from './reducer';

import RestauranteItem from './RestauranteItem';


class Restaurantes extends Component {
  static navigationOptions = {
    title: 'Comidas e Bebidas'
  };

  componentDidMount() {
    this.props.getRestaurantes();
  }

    renderItem = ({ item }) => (
      <RestauranteItem
      id={item.id}
      nome={item.nome}
      comidas={item.comidas}
      observacao={item.observacao}
      imagem={item.imagem}
    />
  );


  _keyExtractor = (item, index) => index.toString();


  render() {

    const { restaurantes, loadingInfo } = this.props;

    if (loadingInfo) return <ActivityIndicator style={styles.emptyListStyle} size="small" color= 'gray' />;

    return (
      <SafeAreaView style={{
          flex: 1,
          backgroundColor: '#E8F0C1'
      }}>
        <ScrollView style={{backgroundColor: '#E8F0C1'}}>
          <Tile
            imageSrc={{ uri: 'https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/tilapia.jpeg'}}
            featured
          />
          <FlatList
            styles={styles.container}
            data={restaurantes}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0C1',
  },
  emptyListStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  emptyMessageStyle: {
    textAlign: 'center',
  },
  activityLoadingStyle: {
    flex: 1,
    justifyContent: 'center'
  }
});


const mapStateToProps = ({ restaurantes, loadingInfo }) => ({
  restaurantes,
  loadingInfo
});


const mapDispatchToProps = {
  getRestaurantes
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurantes);