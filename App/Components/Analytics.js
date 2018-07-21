import Mixpanel from 'react-native-mixpanel';

const TOKEN = require('../Config').analytics;

Mixpanel.sharedInstanceWithToken(TOKEN);

module.exports = Mixpanel;
