import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { Colors } from '../Themes';

export default class Button extends Component {
  render() {
    const { title, onPress, viewStyle, textStyle, enabled } = this.props;
    return (
      <TouchableHighlight
					underlayColor={Colors.underlayColor}
					onPress={enabled ? onPress : null}
					style={viewStyle}
      >
				<Text style={textStyle}>
					{title && title.toUpperCase()}
				</Text>
			</TouchableHighlight>
    );
  }
}
