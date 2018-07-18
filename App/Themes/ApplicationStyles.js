import { StyleSheet } from 'react-native';

import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

const ApplicationStyles = StyleSheet.create({
    inputControl: {
      flex: 0.9,
      fontSize: Fonts.size.normal,
      margin: Metrics.baseMargin,
      borderBottomColor: Colors.fire,
      borderBottomWidth: 0.5
    },
    container: {
      flex: 1,
      backgroundColor: Colors.snow,
      width: '100%'
    },
    inputError: {
      color: Colors.fire,
      marginLeft: Metrics.doubleBaseMargin
    },
    buttonWrapper: {
      flex: 0.7,
      margin: Metrics.baseMargin
    },
    miniForm: {
      flex: 0.3,
      flexDirection: 'row'
    },
    contactIcon: {
      flex: 0.1,
      marginTop: 1.5 * Metrics.baseMargin,
      marginRight: Metrics.baseMargin
    },
    separator: {
      height: Metrics.horizontalLineHeight,
      backgroundColor: Colors.hairline,
    },
    rowAccount: {
      flex: 1,
      flexDirection: 'row',
      padding: Metrics.baseMargin
    },
    amount: {
      flex: 0.3,
      color: Colors.black,
      fontSize: Fonts.size.small,
      fontStyle: 'italic',
      textAlignVertical: 'center',
      textAlign: 'right',
      marginRight: Metrics.baseMargin
    },
    account: {
      flex: 0.7,
      marginLeft: 5,
      color: Colors.black,
      fontSize: Fonts.size.medium,
      fontWeight: 'bold'
    },
    accListWrapper: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: Metrics.baseMargin
    },
    balance: {
      margin: Metrics.baseMargin,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    subrow: {
      flex: 0.74,
      flexDirection: 'column'
    },
    detail: {
      marginLeft: Metrics.baseMargin / 2,
      color: Colors.black,
      fontSize: Fonts.size.medium
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      padding: Metrics.baseMargin / 4
    },
    txnAmount: {
      flex: 0.26,
      color: Colors.charcoal,
      fontSize: Fonts.size.small,
      fontStyle: 'italic',
      textAlign: 'right',
      textAlignVertical: 'center'
    },
    attach: {
      width: Metrics.images.placeholder,
      height: Metrics.images.placeholder,
      marginLeft: Metrics.smallMargin,
      borderWidth: Metrics.horizontalLineHeight,
      borderColor: Colors.border,
      resizeMode: 'stretch'
    },
    dateRow: {
      fontSize: Fonts.size.small,
      color: Colors.charcoal,
      textAlign: 'right',
      marginRight: Metrics.baseMargin
    }
});

export default ApplicationStyles;
