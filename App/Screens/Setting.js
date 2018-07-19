import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
  FlatList,
  StyleSheet,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ApplicationStyles, Colors, Metrics, Images } from '../Themes';

const SharedPreferences = require('react-native-shared-preferences');
const I18n = require('../I18n');

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    //SharedPreferences.setItem('language', 'en');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
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
