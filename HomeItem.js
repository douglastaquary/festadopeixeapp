import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions,
    Image,
    View
  } from 'react-native';

const deviceWidth = Dimensions.get('window').width

import { Icon } from 'react-native-elements';

export default class HomeItem extends Component {
    render() {
        return(
          <View style={styles.rowContainer}>
            <View style={styles.rowText}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode ={'tail'}>
                {this.props.day}
              </Text>
              <Text style={styles.descricao} numberOfLines={1} ellipsizeMode ={'tail'}>
                {this.props.date}
              </Text>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    height: 200,
    padding: 10,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    paddingLeft: 10,
    paddingTop: 70,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  descricao: {
    paddingLeft: 10,
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000000'
  },
  imagem: {    
    flex: 1,
    paddingLeft: 20,
    height: 100,
    width: 375,
    top: 0, 
    left: 0
  },
  rowText: {
    flex: 6,
    flexDirection: 'column'
  }
});