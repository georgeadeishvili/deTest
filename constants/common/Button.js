import React, { Component } from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

const Button = ({ onPress, text, color, long, textColor, round }) => (
  <TouchableOpacity onPress={ onPress } style={
      [
          styles.buttonStyle,
          {
              backgroundColor: color,
              width: (long) ? (Dimensions.get('window').width * 0.85) : (Dimensions.get('window').width * 0.85 / 2),
              borderRadius: (round) ? (30) : (6)
          }
      ]
  }>
    <Text style={ [ styles.textStyle, { color: textColor } ] }>{ text }</Text>
  </TouchableOpacity>
);

const styles = {
  buttonStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: Dimensions.get('window').height * 0.06,
    borderWidth: 1,
    borderColor: 'transparent',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
