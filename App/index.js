import { Navigation } from 'react-native-navigation';
import { Component } from 'react';
// import codePush from 'react-native-code-push';
import { registerScreens } from './Screens';
import { iconsMap, iconsLoaded } from './app-icons';
import { Colors, Fonts } from './Themes';

const I18n = require('./I18n');

registerScreens();

class App extends Component {
  constructor(props) {
    super(props);
    iconsLoaded.then(() => {
      // codePush.sync();
      this.startApp();
    });
  }

  componentDidMount() {

  }

  startApp = () => {
    const appStyle = {
      tabBarBackgroundColor: Colors.primary,
      navBarButtonColor: Colors.snow,
      tabBarButtonColor: Colors.snow,
      navBarTextColor: Colors.snow,
      tabBarSelectedButtonColor: Colors.black,
      navigationBarColor: Colors.primary,
      navBarBackgroundColor: Colors.primary,
      statusBarColor: Colors.primary,
      tabFontFamily: Fonts.type.tab,
    };
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'screen.home',
        title: '',
        navigatorStyle: appStyle,
        navigatorButtons: {
          leftButtons: [{
            id: 'sideMenu',
            buttonColor: Colors.snow,
          }],
          animated: true,
        },
      },
      passProps: {},
      animationType: 'fade',
      drawer: {
        left: {
          screen: 'screen.Drawer',
        },
      },
    });
  }
}

// const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
// codePush
export default App;
