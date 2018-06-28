import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

         // "imagens": ["https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/cachoeira_urubu.jpg",
         //             "https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/esp_cachoeira.jpg",
         //             "https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/esp_vista_alto.jpg"]

import Carousel from 'react-native-snap-carousel';

import { connect } from 'react-redux';

import { listRepos } from './reducer';

import HomeItem from './HomeItem';

import { sliderWidth, sliderItemWidth } from './styles';
import Card from './Card';


class RepoList extends Component {

  state = {
    imagens: [
      {
        imagem: 'https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/cachoeira_urubu.jpg'
      },
      {
        imagem: 'https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/esp_cachoeira.jpg'
      },
      {
        imagem: 'https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/esp_vista_alto.jpg'
      }
    ],
  };

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
      <HomeItem
      id={item.id}
      title={item.date}
    />
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => index.toString();


  renderListComponent = ({ item }) => (
    <Card imagem={item.imagem}/>
  );

  render() {

    const { repos, loading } = this.props;

    if (loading) return <ActivityIndicator size="small" color="#00ff00" />;

    return (
       <ScrollView style={{backgroundColor: '#E8F0C1'}}>
        <Carousel
          data={this.state.imagens}
          renderItem={this.renderListComponent}
          sliderWidth={sliderWidth}
          itemWidth={sliderItemWidth}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />

        <FlatList
          styles={styles.container}
          data={repos}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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