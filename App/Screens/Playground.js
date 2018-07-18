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
class Playground extends Component {
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

/*class PushNotifications extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }
  constructor(props){
    super(props);
    PushNotification.configure({

        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function(token) {
            console.log( 'TOKEN:', token );
        },

        // (required) Called when a remote or local notification is opened or received
        onNotification: function(notification) {
            console.log( 'NOTIFICATION:', notification );
        },

        // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
        senderID: "YOUR GCM SENDER ID",

        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
            alert: true,
            badge: true,
            sound: true
        },

        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        /**
          * (optional) default: true
          * - Specified if permissions (ios) and token (android and ios) will requested or not,
          * - if not, you must call PushNotificationsHandler.requestPermissions() later
          */
        /*requestPermissions: true,
    });
    Mixpanel.track("Event name");
  }
  myfun(){
    PushNotification.localNotification({
        /* Android Only Properties */
        /*id: 0, // (optional) default: Autogenerated Unique ID
        ticker: "My Notification Ticker", // (optional)
        autoCancel: true, // (optional) default: true
        largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
        smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
        bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
        subText: "This is a subText", // (optional) default: none
        color: "red", // (optional) default: system default
        vibrate: true, // (optional) default: true
        vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
        tag: 'some_tag', // (optional) add tag to message
        group: "group", // (optional) add group to message
        ongoing: false, // (optional) set whether this is an "ongoing" notification

        /* iOS and Android properties */
      /*  title: "My Notification Title", // (optional, for iOS this is only used in apple watch, the title will be the app name in other devices)
        message: "My Notification Message", // (required)
        playSound: false, // (optional) default: true
        number: 10 // (optional) default: none (Cannot be zero)
    });
    PushNotification.localNotificationSchedule({
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + (5 * 1000)) // in 60 secs
    });

  /*}
  render(){
    return(
      <Text onPress={this.myfun}>Hello</Text>
    );
  }
}*/

module.exports = Playground;
