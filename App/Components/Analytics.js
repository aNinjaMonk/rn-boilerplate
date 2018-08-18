import Mixpanel from 'react-native-mixpanel';

const AppConfig = require('../Config');

Mixpanel.sharedInstanceWithToken(AppConfig.mixpanel);

module.exports = Mixpanel;
