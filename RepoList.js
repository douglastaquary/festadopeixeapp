import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import { listRepos } from './reducer';

import BookcaseItem from './BookcaseItem';

class RepoList extends Component {
  static navigationOptions = {
    title: 'Repositórios'
  };

  componentDidMount() {
    this.props.listRepos();
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        this.props.navigation.navigate('Detail', { ...item })  
      }
    >
      <BookcaseItem
      id={item.id}
      title={item.date}
    />
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => index.toString();

  render() {
    const { repos } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        <FlatList
          styles={styles.container}
          data={repos}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);