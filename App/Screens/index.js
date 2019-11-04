import { Navigation } from 'react-native-navigation';

import Home from './Home';
import Setting from './Setting';
import Login from './Login';
import Drawer from './Drawer';
import Playground from './Playground';

function registerScreens() {
  Navigation.registerComponent('screen.home', () => Home);
  Navigation.registerComponent('screen.drawer', () => Drawer);
  Navigation.registerComponent('screen.playground', () => Playground);
  Navigation.registerComponent('screen.setting', () => Setting);
  Navigation.registerComponent('screen.login', () => Login);
}

module.exports = {
  registerScreens,
};
