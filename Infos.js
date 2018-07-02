import React, {Component} from 'react';
import {
    View, 
    Text, 
    SafeAreaView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

import Communications from 'react-native-communications';

class Infos extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#E8F0C1',
            }}>
        <Text style={styles.head} numberOfLines={2} ellipsizeMode ={'tail'}>O que você esta achando do festival?</Text>
        <Text style={styles.text}>Tem alguma sujestão, reclamação?</Text>
        <TouchableOpacity onPress={() => Communications.email(['douglastaquary@gmail.com', 'emailAddress2'],null,null,'My Subject','My body text')}>
          <View style={styles.holder}>
            <Text style={styles.text}>Enviar email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.web('https://github.com/facebook/react-native')}>
          <View style={styles.holder}>
            <Text style={styles.text}>Open react-native repo on Github</Text>
          </View>
        </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(253,253,253)',
  },
  holder: {
    flex: 0.25,
    justifyContent: 'center',
  },
  head: {
    fontSize: 22,
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    color: '#000000',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  }
});

export default Infos;