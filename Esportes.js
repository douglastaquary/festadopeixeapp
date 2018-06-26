import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

class Esportes extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#E8F0C1',
                justifyContent: 'center'
            }}>
                <Text>Programação Esportiva</Text>
            </SafeAreaView>
        );
    }
}

export default Esportes;