import { Navigation } from 'react-native-navigation';
import { registerScreens } from './Screens';
import { home, options, playground } from "./Layouts";
import { Colors, Fonts } from './Themes';

const I18n = require('./I18n');

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(options);
  Navigation.setRoot({
    root: home
  });
});
