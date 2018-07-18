import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import React, { Component } from 'react';
//import codePush from 'react-native-code-push';
import { registerScreens } from './Screens';
import { iconsMap, iconsLoaded } from './app-icons';
import { Colors, Fonts } from './Themes';
import { getUsername } from './Api';

const I18n = require('./I18n');

registerScreens();

class App extends Component {
  constructor(props) {
    super(props);
    iconsLoaded.then(() => {
      //codePush.sync();
      this.startApp();
    });
  }
  componentDidMount() {

  }
  startApp = () => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'screen.home',
        title: '',
        navigatorStyle: {
          navBarHidden: true,
          drawUnderNavBar: true,
          navBarTransparent: true
        },
        navigatorButtons: {}
      },
      passProps: {},
      animationType: 'fade',
      drawer: {
        left: {
          screen: 'screen.Drawer'
        }
      }
    });
  }
}

//const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
//codePush
export default App;
