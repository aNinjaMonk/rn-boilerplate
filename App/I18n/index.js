// @flow
import I18n from 'react-native-i18n';
I18n.fallbacks = true;

// English language is the main language for fall back:
I18n.translations = {
  en: require('./languages/english.json')
};
const languageCode = I18n.locale.substr(0, 2);

switch (languageCode) {
  case 'hi':
    I18n.translations.hi = require('./languages/hi.json')
    break;
  default:
    I18n.translations.en = require('./languages/english.json')
}

module.exports = I18n;
