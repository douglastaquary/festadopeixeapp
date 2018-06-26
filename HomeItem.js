import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';

import { Icon } from 'react-native-elements';

export default class HomeItem extends Component {
    render() {
        return(
          <View style={styles.rowContainer}>
            <View style={styles.rowText}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                {this.props.title}
              </Text>
              <Text style={styles.descricao} numberOfLines={2} ellipsizeMode ={'tail'}>
                {this.props.descricao}
              </Text>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#2BA08A',
    height: 200,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 20,
    paddingTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FCFDFD'
  },
  descricao: {
    paddingLeft: 20,
    paddingTop: 40,
    fontSize: 18,
    color: '#FFF'
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
});