import React, {Component} from 'react';
import {
    View, 
    Text, 
    SafeAreaView, 
    SectionList,
    StyleSheet,
    Platform, 
    Alert,
    ActivityIndicator
} from 'react-native';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { listRepos } from './reducer';

import Row from './Row';


class Esportes extends Component {



componentDidMount() {
    this.props.listRepos();
}

GetSectionListItem=(item)=>{
    Alert.alert(item.nome)
}

render() {

    const { festivalInfo, loading } = this.props;

    const {
      imagens,
      programacao
    } = festivalInfo;

    this.programacao = { programacao }


    if (loading) return <ActivityIndicator style={styles.activityLoadingStyle} size="small" color= 'gray' />;

        return (
            <SafeAreaView style={{
                flex: 2,
                backgroundColor: '#E8F0C1'
            }}>

 
                <SectionList

                sections = {programacao}
 
                    renderSectionHeader={ ({section}) => <Text style={styles.sectionHeaderStyle}> { section.day } </Text> }
 
                    renderItem = { ({item}) => 

        <View style={styles.rowContainer}>
          <View style={styles.rowText}>
          <Text style={styles.sectionListItemStyle} numberOfLines={2} ellipsizeMode ={'tail'} onPress={this.GetSectionListItem.bind(this, item)}> { item.nome } </Text>
            <Text style={styles.observacao} numberOfLines={2} ellipsizeMode ={'tail'}>
              {item.horario}
            </Text>
          </View>
        </View>

                    }

 
                    keyExtractor = { (item, index) => index }
         
                />
 
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 130,
    padding: 10,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 2,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 0,
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
  }, 
  sectionHeaderStyle:{
    backgroundColor : '#E8F0C1',
    fontSize : 20,
    marginLeft: 10,
    fontWeight: 'bold',
    padding: 5,
    color: '#000000',
    marginLeft: 0,
  },
  sectionListItemStyle:{
    fontSize : 20,
    padding: 5,
    marginTop: 5,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    color: '#1E6F65'
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  },
  observacao: {
    paddingLeft: 10,
    paddingTop: 6,
    marginTop: 5,
    fontSize: 15,
    color: '#777'
  }
});

const mapStateToProps = ({ festivalInfo, loading }) => ({
  festivalInfo,
  loading
});


const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(Esportes);