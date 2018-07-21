import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Text, Share, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import {
  Colors, Metrics, Images, Fonts, ApplicationStyles
} from '../Themes';

const I18n = require('../I18n');

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      user: {
        name: '',
        email: '',
      },
      date: '',
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {

  }

  onNavigatorEvent = (event) => {
    if (event.id === 'didAppear') {
      this.forceUpdate();
    }
  }

  openShare = () => {
    Share.share({
      message: I18n.t('shareMessage'),
      title: I18n.t('shareTitle'),
    });
  }

  openHelp = () => {
    this.props.navigator.handleDeepLink({
      link: 'lightbox.contact',
      payload: I18n.t('setting'),
    });
  }

  openSetting = () => {
    this.props.navigator.handleDeepLink({
      link: 'screen.setting',
      payload: I18n.t('setting')
    });
  }

  render() {
    const { date, name } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.subheader}>
            <Text style={styles.name}></Text>
            <Text style={styles.period}>
              { moment(date).format('DD MMM YYYY') + '  '} -
              { '  ' + moment(date).add(1, 'year').format('DD MMM YYYY')}
            </Text>
          </View>
          <Icon
              name='pencil'
              size={Metrics.icons.small}
              color={Colors.snow}
              style={styles.editButton}
          />
        </View>
        <View style={styles.submenu} />
        <View style={styles.menu}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.drawerWidth,
    backgroundColor: Colors.snow,
  },
  header: {
    flex: 0.2,
    width: Metrics.drawerWidth,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
  },
  subheader: {
    flex: 0.9,
    flexDirection: 'column',
    marginLeft: Metrics.doubleBaseMargin,
    marginBottom: Metrics.baseMargin,
  },
  editButton: {
    flex: 0.1,
    margin: Metrics.doubleBaseMargin,
    textAlignVertical: 'bottom',
  },
  name: {
    ...Fonts.style.h5,
    flex: 0.9,
    color: Colors.snow,
    textAlignVertical: 'bottom',
    marginBottom: Metrics.smallMargin,
  },
  period: {
    flex: 0.2,
    fontSize: 12,
    fontStyle: 'italic',
    color: Colors.snow,
  },
  submenu: {
    flex: 0.65,
    width: Metrics.drawerWidth,
  },
  menu: {
    flex: 0.15,
    width: Metrics.drawerWidth,
    flexDirection: 'row',
    backgroundColor: Colors.primary,
  },
  menuItem: {
    flex: 0.333,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: Metrics.marginHorizontal,
    paddingTop: Metrics.doubleBaseMargin,
  },
  menuButton: {
    paddingBottom: Metrics.marginHorizontal,
  },
  menuText: {
    color: Colors.snow,
    fontSize: Fonts.size.regular,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: Metrics.doubleSection,
    backgroundColor: Colors.whitish,
    borderWidth: 0.2,
    borderColor: Colors.hairline,
  },
  optionText: {
    color: Colors.black,
    fontSize: Fonts.size.regular,
    marginLeft: Metrics.doubleBaseMargin,
  },
});

export default Drawer;
