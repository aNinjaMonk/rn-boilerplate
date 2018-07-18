import Mixpanel from 'react-native-mixpanel';
const TOKEN = require('../Config').analytics;

//hello
Mixpanel.sharedInstanceWithToken(TOKEN);

module.exports = Mixpanel;
