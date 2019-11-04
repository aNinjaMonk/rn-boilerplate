import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TouchableOpacity, TextInput, Button,
} from 'react-native';
// var PushNotification = require('react-native-push-notification');

/* var Mixpanel = require('react-native-mixpanel');
Mixpanel.sharedInstanceWithToken("c0fd73f57f259ce3889d79fdf1d188e6");
*/
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import { iconsMap, iconsLoaded } from '../app-icons';
import { ApplicationStyles, Colors, Metrics, Images } from '../Themes';
import OneSignal from 'react-native-onesignal';
import { AppConfig } from '../Config';
const { Platform } = require('react-native');
const validate = require('validate.js');
const I18n = require('../I18n');

const constraints = {
  content: {
    presence: {
      message: 'Required',
    },
  },
};

// realm.objects('Account').map(account => { return account.name; })
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    /* iconsLoaded.then(() => {
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
    }); */
  }

  componentDidMount() {
    OneSignal.init(AppConfig.onesignal);

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = (notification) => {
    console.log('Notification received: ', notification);
  }

  onOpened = (openResult) => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds = (device) => {
    console.log('Device info: ', device);
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
    backgroundColor: Colors.snow,
  },
});
