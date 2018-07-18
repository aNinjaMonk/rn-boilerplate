import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TouchableOpacity, TextInput, Button
} from 'react-native';
//var PushNotification = require('react-native-push-notification');

/*var Mixpanel = require('react-native-mixpanel');
Mixpanel.sharedInstanceWithToken("c0fd73f57f259ce3889d79fdf1d188e6");
*/

import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import { ApplicationStyles, Colors, Metrics, Images } from '../Themes'

const Platform = require('react-native').Platform;
const I18n = require('../I18n');
const validate = require('validate.js');

const constraints = {
  content: {
    presence: {
      message: 'Required'
    }
  }
};

//realm.objects('Account').map(account => { return account.name; })
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      error: ''
    };
  }

  pressed = () => {
    /*Linking
      .openURL("")
      .catch(err => console.error('An error occurred', err));*/

    /*this.setState({
      detail : "hello"
    })*/

    /*const error = validate({content: this.state.content},constraints);

    this.setState({
      error: error.content[0]
    })*/
  }
  error = () => {
    if (this.state.error) {
      return <Text style={{ color: Colors.fire, marginLeft: 10 }}>{this.state.error}</Text>;
    }
    return null;
  }
  render1() {
    return (
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            placeholder="Detail"
            spellCheck={false}
            autoCorrect={false}
            maxLength={35}
            value={this.state.content}
            onChangeText={(text) => this.setState({ content: text })}
        />
        {this.error()}
        <View style={{ margin: 10 }}>
          <Button color="#000" title="OK" onPress={this.pressed} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 10,
    position: 'absolute',
    right: 10,
    top: 0,
    zIndex: 1,
    borderWidth: 0,
    borderColor: '#ff0000'
  },
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25,
    borderColor: '#ff0000'
  },
  textInput: {
    borderWidth: 0,
    borderColor: '#fff'
  }
});
