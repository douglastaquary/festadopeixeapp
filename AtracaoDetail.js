import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { 
  Tile, 
  List,
  Text, 
  ListItem,
  View
 } from 'react-native-elements';

import { connect } from 'react-redux';

class AtracaoDetail extends Component {
  static navigationOptions = {
    title: 'Detalhes'
  };

  render() {
    
    const { nome, horario, local, descricao, imagem } = this.props.navigation.state.params;

    return (
      <ScrollView style={{backgroundColor: '#E8F0C1'}}>
        <Tile
          imageSrc = {{ uri: imagem }}
          featured
          title = { nome }
          caption = { horario }
        >
          <Text>Alguma coisa</Text>
          
        </Tile>
        <List>
            <ListItem
              title="Local"
              rightTitle={local}
              hideChevron
            />
            <ListItem
              title="Estilo"
              rightTitle={descricao}
              hideChevron
            />
          </List>
      </ScrollView>
    );
  }
}


const mapStateToProps = ({ nome, horario, local, descricao, imagem }) => ({
  nome, horario, local, descricao, imagem
});


export default connect(mapStateToProps)(AtracaoDetail);