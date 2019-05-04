import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    
    return <ExpoConfigView />;
  }
}
