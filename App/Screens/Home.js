import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TouchableOpacity, TextInput, Button
} from 'react-native';
//var PushNotification = require('react-native-push-notification');

/*var Mixpanel = require('react-native-mixpanel');
Mixpanel.sharedInstanceWithToken("c0fd73f57f259ce3889d79fdf1d188e6");
*/
import { iconsMap, iconsLoaded } from '../app-icons';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import { ApplicationStyles, Colors, Metrics, Images } from '../Themes';

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
      
    };

    /*iconsLoaded.then(() => {
      this.props.navigator.setButtons({
        leftButtons: [{
          id: 'sideMenu',
          buttonColor: Colors.snow
        }],
        fab: {
          collapsedId: 'new',
          collapsedIcon: iconsMap.pencil,
          backgroundColor: Colors.darkPrimary
        },
        animated: true
      });
    });*/

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  }
});
