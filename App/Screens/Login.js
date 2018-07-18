import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TextInput, ScrollView, StyleSheet, Button, Image, DatePickerAndroid
} from 'react-native';
//import RNRestart from 'react-native-restart';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ApplicationStyles, Colors, Metrics, Images } from '../Themes';

import moment from 'moment';

const _ = require('lodash');
const validate = require('validate.js');
const I18n = require('../I18n');
const Mixpanel = require('../Components/Analytics');

const constraints = {
  name: {
    presence: {
      message: I18n.t('required')
    }
  }
};

export default class Login extends Component {
  static navigatorStyle = {
    navBarTextColor: Colors.snow,
    navBarComponentAlignment: 'center',
    screenBackgroundColor: Colors.snow,
    navBarBackgroundColor: Colors.primary,
  };
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      nameError: '',
      date: new Date(2018, 3, 1)
    };

    this.props.navigator.setTitle({
      title: I18n.t('app_name')
    });

    this.props.navigator.setDrawerEnabled({
      side: 'left',
      enabled: false
    });

    this.startAppDebounced = _.debounce(this.startApp, 300);
    this.datePickerDebounced = _.debounce(this.datePicker, 300);
  }

  componentDidMount() {
    //alert(I18n.currentLocale());
  }

  componentWillUnmount() {
    this.startAppDebounced.cancel();
  }

  startApp = () => {
    const { name, date } = this.state;
    const error = validate({ name }, constraints);
    if (!error) {
      Mixpanel.identify(name + new Date().getUTCMilliseconds());
      Mixpanel.set({ $name: name });
      //RNRestart.Restart();

      //If previous account exists then sync the previous data else show main screen.
    } else {
      this.setState({
        nameError: error.name[0]
      });
    }
  }

  datePicker = () => {
    this.showPicker({ date: this.state.date, maxDate: new Date() });
  }

  showPicker = async(options) => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        this.setState({
          date: new Date(year, month, day, 0, 0, 1)
        });
      }
    } catch ({ code, message }) {
      console.warn('Error in example ', message);
    }
  };

  render() {
    const { name, nameError, date } = this.state;
    return (
      <ScrollView style={ApplicationStyles.container} keyboardShouldPersistTaps='always'>
        <View style={styles.view}>
          <TextInput
              style={ApplicationStyles.inputControl}
              placeholder={I18n.t('business')}
              multiline={false}
              autoCorrect={false}
              autoFocus
              maxLength={30}
              value={name}
              selectionColor={Colors.black}
              placeholderTextColor={Colors.charcoal}
              underlineColorAndroid={Colors.transparent}
              onChangeText={(text) => this.setState({ name: text, nameError: '' })}
          />
          {
            nameError ?
            <Text style={ApplicationStyles.inputError}>{nameError}</Text>
            : null
          }
        </View>
        <View
          style={[styles.view,
          { marginLeft: Metrics.doubleBaseMargin,
            marginTop: Metrics.baseMargin,
            marginBottom: Metrics.baseMargin }]}
        >
          <Text style={styles.textView}>{I18n.t('yearStart')}</Text>
          <View
            style={[ApplicationStyles.miniForm,
            { marginLeft: 0,
              marginTop: 0,
              marginBottom: 10,
              paddingTop: 0
            }]}
          >
            <TextInput
                style={ApplicationStyles.inputControl}
                placeholder={I18n.t('yearStart')}
                multiline={false}
                autoCorrect={false}
                maxLength={25}
                editable={false}
                value={moment(date).format('DD MMM YYYY')}
                selectionColor={Colors.black}
                placeholderTextColor={Colors.charcoal}
                underlineColorAndroid={Colors.transparent}
                onChangeText={(text) => this.setState({ date: text })}
            />
            <Icon
              name='calendar'
              size={Metrics.icons.medium}
              color={Colors.primary}
              style={ApplicationStyles.contactIcon}
              onPress={this.datePickerDebounced}
            />
          </View>
        </View>
        <View style={styles.view}>
          <Button
            title={I18n.t('start')}
            color={Colors.darkPrimary}
            onPress={this.startAppDebounced}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageView: {
    margin: Metrics.doubleSection,
    alignItems: 'center',
    alignContent: 'center'
  },
  image: {
    width: Metrics.images.placeholder,
    height: Metrics.images.placeholder,
    resizeMode: 'contain'
  },
  view: {
    margin: Metrics.baseMargin,
    marginTop: 0,
    marginBottom: 0
  },
  textView: {
    color: Colors.charcoal,
    fontSize: 14,
    fontStyle: 'italic'
  }
});
