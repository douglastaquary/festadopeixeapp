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
              <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                {this.props.title}
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
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    paddingLeft: 20,
    paddingTop: 70,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  descricao: {
    paddingLeft: 20,
    paddingTop: 40,
    fontSize: 18,
    color: '#777'
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