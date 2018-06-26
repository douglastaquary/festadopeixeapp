import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Icon from '@expo/vector-icons/FontAwesome';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';

import RepoList from './RepoList';
import AtracaoDetail from './AtracaoDetail';
import Restaurantes from './Restaurantes';
import Atracoes from './Atracoes';
import Esportes from './Esportes';
import Patrocinadores from './Patrocinadores';

const client = axios.create({
  baseURL: 'https://raw.githubusercontent.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const Tabs = createBottomTabNavigator({
  RepoList: {
      screen: RepoList,
      navigationOptions: () => ({
            tabBarLabel: 'Atrações',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="music"
                    color={tintColor}
                    size={24}
                />
            )
      })
  },
  Restaurantes: {
      screen: Restaurantes,
      navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="glass"
                    color={tintColor}
                    size={24}
                />
            )
      })
  },
  Esportes: {
      screen: Esportes,
      navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="flag-checkered"
                    color={tintColor}
                    size={24}
                />
            )
      })
  },
  Patrocinadores: {
      screen: Patrocinadores,
      navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="handshake-o"
                    color={tintColor}
                    size={24}
                />
            )
      })
  }
},{
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#2BA08A',
        inactiveTintColor: '#d3d3d3',
        style: {
            backgroundColor: '#E8F0C1'
        },
        tabStyle: {}
    }
});

const Stack = createStackNavigator({
  Home: {
    screen: Tabs
  },
  Detail: {
    screen: AtracaoDetail
  },
  Atracoes: {
    screen: Atracoes
  },
  Esportes: {
    screen: Esportes
  },
  Patrocinadores: {
    screen: Patrocinadores
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2BA08A'
  }
});
