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
import Infos from './Infos';
import Workshops from './Workshops';

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
    Workshops: {
      screen: Workshops,
      navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="book"
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
  },
  Infos: {
      screen: Infos,
      navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="info"
                    color={tintColor}
                    size={24}
                />
            )
      })
  }
},{
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#1E6F65',
        inactiveTintColor: '#d3d3d3',
        style: {
            backgroundColor: '#FFFFFF'
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
  },
  Infos: {
    screen: Infos
  },
    Workshops: {
    screen: Workshops
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
