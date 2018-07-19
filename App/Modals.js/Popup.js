import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
  } from 'react-native';
import { Colors, Metrics, ApplicationStyles, Fonts } from '../Themes';
import Button from '../Components/Button';

const I18n = require('../I18n');

export default class Popup extends Component {
  render() {
    const { houseNumber, dismiss, more } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>
              {I18n.t('houseNoIs')}
              {'\n'}
          </Text>
          <Text style={styles.house}>
            {houseNumber}
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button
            enabled
            title={I18n.t('cancel')}
            onPress={dismiss}
            textStyle={styles.cancel}
          />
          <Button
            enabled
            title={I18n.t('more')}
            onPress={more}
            viewStyle={styles.moreBtn}
            textStyle={styles.moreText}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.snow,
    flex: 1,
    margin: Metrics.baseMargin,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.baseMargin
  },
  text: {
    paddingTop: Metrics.doubleBaseMargin,
    fontSize: 16,
    color: '#575757'
  },
  content: {
    flex: 0.8,
    borderColor: Colors.border,
    justifyContent: 'center',
  },
  header: {
    ...Fonts.style.h6,
    textAlign: 'center'
  },
  house: {
    ...Fonts.style.h3,
    textAlign: 'center',
    color: Colors.primary,
    fontWeight: 'bold',
    marginTop: Metrics.baseMargin
  },
  cancel: {
    color: Colors.charcoal,
    fontWeight: 'bold',
    marginTop: Metrics.smallMargin + 2,
    marginRight: Metrics.baseMargin
  },
  buttons: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20
  },
  moreBtn: {
    flex: 0.5,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    padding: 7,
    marginLeft: 10
  },
  moreText: {
    color: Colors.snow,
    textAlign: 'center'
  }
});
