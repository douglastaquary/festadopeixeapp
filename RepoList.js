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

import Carousel from 'react-native-snap-carousel';

import { connect } from 'react-redux';

import { listRepos } from './reducer';

import HomeItem from './HomeItem';

import { sliderWidth, sliderItemWidth } from './styles';

import Card from './Card';


class RepoList extends Component {


  state = {
    atracoes: [
      {
        imagem: 'https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/marilia_mendoncav2.jpeg'
      },
      {
        imagem: 'https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/zeze.jpeg'
      },
      {
        imagem: 'https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/marcia_felipev2.jpeg'
      },
      {
        imagem: 'https://raw.githubusercontent.com/douglastaquary/festadopeixeapi/master/luan_santanav2.jpeg'
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
      day={item.day}
      date={item.date}
    />
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => index.toString();


  renderListComponent = ({ item }) => (
    <Card imagem={item.imagem}/>
  );

  render() {

    const { festivalInfo, loading } = this.props;

    const {
      imagens,
      programacao
    } = festivalInfo;

    if (loading) return <ActivityIndicator style={styles.emptyListStyle} size="small" color= 'gray' />;

    return (
       <ScrollView style={{backgroundColor: '#E8F0C1'}}>
          <Carousel
          data={this.state.atracoes}
          renderItem={this.renderListComponent}
          sliderWidth={sliderWidth}
          itemWidth={sliderItemWidth}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />

          <FlatList
            styles={styles.container}
            data={programacao}
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
  },
  emptyListStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  emptyMessageStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  activityLoadingStyle: {
    flex: 1,
    justifyContent: 'center'
  }
});

const mapStateToProps = ({ festivalInfo, loading }) => ({
  festivalInfo,
  loading
});


const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);