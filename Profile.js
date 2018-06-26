import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getUser } from './reducer';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
  };
  componentDidMount() {
    this.props.getUser('douglastaquary');
  }

  render() {
    const { user, loadingProfile } = this.props;

    if (loadingProfile) return <ActivityIndicator size="large" color="#E8F0C1" />;

    const { name, login } = user;
    return (
      <View>
        <Text>Name: {name}</Text>
        <Text>Login: {login}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ user, loadingProfile }) => ({
  user,
  loadingProfile
});

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);