import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';

import { Icon } from 'react-native-elements';

export default class RestauranteItem extends Component {

  _onSelctedRestaurante = () => {}

  render() {
    return(
      <TouchableOpacity onPress={this._onSelctedRestaurante}>
        <View style={styles.rowContainer}>
          <Image source={{uri: this.props.imagem }}
            style={styles.imagem}
            resizeMode="contain"/>
          <View style={styles.rowText}>
            <Text style={styles.nome} numberOfLines={2} ellipsizeMode ={'tail'}>
              {this.props.nome}
            </Text>
            <Text style={styles.comidas} numberOfLines={2} ellipsizeMode ={'tail'}>
              {this.props.comidas}
            </Text>

            <Text style={styles.observacao} numberOfLines={1} ellipsizeMode ={'tail'}>
              {this.props.observacao}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 130,
    padding: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 8,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  nome: {
    paddingLeft: 10,
    paddingTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000'

  },
  comidas: {
    paddingLeft: 10,
    paddingTop: 6,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777'
  },
  observacao: {
    paddingLeft: 10,
    paddingTop: 6,
    marginTop: 5,
    fontSize: 12,
    color: '#777'
  },
  imagem: {    
    flex: 1,
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
  });