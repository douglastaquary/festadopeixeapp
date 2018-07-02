import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';

import { Icon } from 'react-native-elements';

export default class AtracoesItem extends Component {
    render() {
        return(
          <View style={styles.rowContainer}>
            <View style={styles.rowText}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                {this.props.title}
              </Text>
              <Text style={styles.estilo} numberOfLines={1} ellipsizeMode ={'tail'}>
                {this.props.estilo}
              </Text>
              <Text style={styles.horario} numberOfLines={1} ellipsizeMode ={'tail'}>
                {this.props.horario}
              </Text>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 120,
    padding: 5,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E6F65'
  },
  horario: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  estilo: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 16,
    color: '#777'
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
});