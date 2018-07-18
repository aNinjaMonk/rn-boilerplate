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
import { ApplicationStyles, Colors, Metrics, Images } from '../Themes'
//import CustomButton from '../Components/CustomButton';
//import { deleteAll } from '../Api';

const SharedPreferences = require('react-native-shared-preferences');
const I18n = require('../I18n');

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: ''
    };
    this.props.navigator.toggleTabs({
      to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
      animated: true
    });

    SharedPreferences.setItem('language', 'en');
  }
  logout = () => {
    //deleteAll();
  }
  render() {
    return (
      <View style={styles.container}>
        <CustomButton text={I18n.t('logout')} iconName="sign-out" onPress={this.logout} />
        <Text>Language</Text>
        <Text>English</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  },
  button: {
    margin: 50,
    padding: 20
  },
  inputControl: {
    margin: 10
  }
});
