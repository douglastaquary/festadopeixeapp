import React, { Component } from 'react';
import { 
  View, 
  Text, 
  ActivityIndicator, 
  FlatList, 
  StyleSheet 
} from 'react-native';

import { connect } from 'react-redux';

import { getPatrocinadores } from './reducer';

import PatrocinadorItem from './PatrocinadorItem';


class Patrocinadores extends Component {
  static navigationOptions = {
    title: 'Patrocinadores'
  };

  componentDidMount() {
    this.props.getPatrocinadores();
  }

    renderItem = ({ item }) => (
      <PatrocinadorItem
      id={item.id}
      nome={item.nome}
      observacao={item.descricao}
      imagem={item.imagem}
    />
  );


  _keyExtractor = (item, index) => index.toString();


  render() {

    const { patrocinadores, loadingInfo } = this.props;

    if (loadingInfo) return <ActivityIndicator size="small" color="#00ff00" />;

    return (
      <View style={styles.container}>
        {
          patrocinadores.length?
        
          (<FlatList
            styles={styles.container}
            data={patrocinadores}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
          />) 
          :
          (
            <View style={styles.emptyListStyle}>
              <Text style={styles.emptyMessageStyle}>Nenhum patrocinador foi encontrado!</Text>  
            </View>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0C1',
  },
  emptyListStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  emptyMessageStyle: {
    textAlign: 'center',
  }
});


const mapStateToProps = ({ patrocinadores, loadingInfo }) => ({
  patrocinadores,
  loadingInfo
});


const mapDispatchToProps = {
  getPatrocinadores
};

export default connect(mapStateToProps, mapDispatchToProps)(Patrocinadores);