import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';
import RepoList from './RepoList';
import RepoDetail from './RepoDetail';
import Profile from './Profile';
import Atracoes from './Atracoes';

const client = axios.create({
  baseURL: 'https://raw.githubusercontent.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const Tabs = createBottomTabNavigator({
  RepoList: {
    screen: RepoList,
    navigationOptions: {
      title: 'Atrações',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Settings',
    },
  }
});

const Stack = createStackNavigator({
  Home: {
    screen: Tabs
  },
  Detail: {
    screen: RepoDetail
  },
  Atracoes: {
    screen: Atracoes
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
