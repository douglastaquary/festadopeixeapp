import React, { Component } from 'react';
import {
  ActivityIndicator,
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
    title: 'Atrações'
  };

  componentDidMount() {
    this.props.listRepos();
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        this.props.navigation.navigate('Atracoes', { ...item })  
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

    const { repos, loading } = this.props;

    if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

    return (
      <View style={styles.container}>

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
    backgroundColor: '#E8F0C1',
  }
});

const mapStateToProps = ({ repos, loading }) => ({
  repos,
  loading
});


const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);