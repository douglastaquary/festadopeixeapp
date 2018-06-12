import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

class RepoDetail extends Component {
  static navigationOptions = {
    title: 'Detalhes'
  };

  render() {
    
    const { evento } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: evento.imagem}}
          featured
          title={evento.nome}
          caption={evento.horario}
        />

        <List>
          <ListItem
            title="Local"
            rightTitle={evento.local}
            hideChevron
          />
          <ListItem
            title="Descrição"
            rightTitle={evento.descricao}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}


const mapStateToProps = ({ evento}) => ({
  evento
});


export default connect(mapStateToProps)(RepoDetail);