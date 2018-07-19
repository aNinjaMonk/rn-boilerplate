import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TextInput, ScrollView, StyleSheet, Button, Image, DatePickerAndroid
} from 'react-native';
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
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      nameError: ''
    };

    this.props.navigator.setTitle({
      title: I18n.t('app_name')
    });

    this.loginDebounced = _.debounce(this.login, 300);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.loginDebounced.cancel();
  }

  login = () => {
    const { name } = this.state;
    const error = validate({ name }, constraints);
    if (!error) {

    }
  }

  render() {
    const { name, nameError } = this.state;
    return (
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps='always'>
        <View style={styles.view}>
          <TextInput
              style={styles.inputControl}
              placeholder="Username"
              multiline={false}
              autoCorrect={false}
              autoFocus
              maxLength={30}
              value={name}
              selectionColor={Colors.black}
              placeholderTextColor={Colors.charcoal}
              underlineColorAndroid={Colors.primary}
              onChangeText={(text) => this.setState({ name: text, nameError: '' })}
          />
          {
            nameError ?
            <Text style={ApplicationStyles.inputError}>{nameError}</Text>
            : null
          }
        </View>
        <View style={styles.view}>
          <Button
            title='Button'
            color={Colors.darkPrimary}
            onPress={this.loginDebounced}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  },
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
    marginBottom: 10
  },
  textView: {
    color: Colors.charcoal,
    fontSize: 14,
    fontStyle: 'italic'
  },
  inputControl: {

  }
});
