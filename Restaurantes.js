import React, { Component } from 'react';
import { 
  View, 
  Text, 
  ActivityIndicator, 
  FlatList, 
  StyleSheet,
  SafeAreaView 
} from 'react-native';

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

    if (loadingInfo) return <ActivityIndicator size="small" color="#00ff00" />;

    return (
      <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#E8F0C1'
            }}>
        <View style={styles.container}>
        {
          restaurantes.length?
        
          (<FlatList
            styles={styles.container}
            data={restaurantes}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
          />) 
          :
          (
            <View style={styles.emptyListStyle}>
              <Text style={styles.emptyMessageStyle}>Nenhum restaurante foi encontrado!</Text>  
            </View>
          )
        }
      </View>
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