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

import BookcaseItem from './BookcaseItem';

class Atracoes extends Component {
  static navigationOptions = {
    title: 'Atrações'
  };

  componentDidMount() {
	const { programacao_cultural } = this.props.navigation.state.params;
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
      title={item.nome}
    />
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => index.toString();

  render() {

	const { programacao_cultural } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        <FlatList
          styles={styles.container}
          data={programacao_cultural}
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
    backgroundColor: '#E8EEC0',
  }
});


const mapStateToProps = ({ programacao_cultural}) => ({
  programacao_cultural
});


export default connect(mapStateToProps)(Atracoes);