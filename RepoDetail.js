import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

class RepoDetail extends Component {
  static navigationOptions = {
    title: 'Detalhes'
  };

  render() {
    
    const { nome, horario, local, descricao, imagem } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc = {{ uri: imagem }}
          featured
          title = { nome }
          caption = { horario }
        />

        <List>
          <ListItem
            title="Local"
            rightTitle={local}
            hideChevron
          />
          <ListItem
            title="Descrição"
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


export default connect(mapStateToProps)(RepoDetail);