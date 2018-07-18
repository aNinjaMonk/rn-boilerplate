// @flow
import I18n from 'react-native-i18n';

const SharedPreferences = require('react-native-shared-preferences');

I18n.fallbacks = true;

// English language is the main language for fall back:
I18n.translations = {
  en: require('./languages/english.json')
};
/*
//SharedPreferences.setItem("language","hi");
SharedPreferences.getItem('language',(value)=> {
  //I18n.locale = value;
  let languageCode = I18n.locale.substr(0, 2)
  //console.log(I18n.locale);

  // All other translations for the app goes to the respective language file:
  switch (languageCode) {
    case 'hi':
      I18n.translations.hi = require('./languages/hi.json')
      break;
    case 'en':
      I18n.translations.en = require('./languages/english.json')
      break;
  }
});
*/
const languageCode = I18n.locale.substr(0, 2);
//console.log(I18n.locale);

switch (languageCode) {
  case 'hi':
    I18n.translations.hi = require('./languages/hi.json')
    break;
  default:
    I18n.translations.en = require('./languages/english.json')
}

module.exports = I18n;
