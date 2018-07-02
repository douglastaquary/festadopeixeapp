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
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 130,
    padding: 10,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 2

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
    height: 56,
    width: 56,
    marginTop: 10,
    marginLeft: 0,
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
  });