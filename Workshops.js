import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

class Workshops extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#E8F0C1',
                justifyContent: 'center'
            }}>
                <Text>Workshops e Oficinas</Text>
            </SafeAreaView>
        );
    }
}

export default Workshops;