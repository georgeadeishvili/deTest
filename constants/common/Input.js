import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, StyleSheet } from 'react-native';
import { BoxShadow } from 'expo-react-native-shadow';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => (
    <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>
            {label}
        </Text>
        <BoxShadow setting={shadowStyle}>
            <TextInput
                secureTextEntry={secureTextEntry}
                underlineColorAndroid='transparent'
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={styles.inputStyle}
            />
        </BoxShadow>
    </View>

);

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').Height;

const styles = StyleSheet.create({
  inputStyle: {
    color: '#C0C0C0',
    paddingRight: Width * 0.04,
    paddingLeft: Width * 0.04,
    fontSize: 14,
    lineHeight: 17,
    height: '100%',
    width: "100%",
    backgroundColor:'white',
    borderRadius:4
  },
  labelStyle: {
      color: '#C0C0C0',
      fontSize: 12,
      lineHeight: 14,
  },
  containerStyle: {
      width: Width * 0.85,
      alignSelf: 'center'
   }
});
const shadowStyle = {
  width: Dimensions.get('window').width * 0.85,
  height: Dimensions.get('window').height * 0.06,
  color: "#000",
  border: 7,
  radius: 4,
  opacity: 0.1,
  x: 0,
  y: 3,
  style: {
      marginTop: 12,
      flexDirection: 'row',
      alignItems: 'center',
      height: Dimensions.get('window').height * 0.06,
      width: Dimensions.get('window').width * 0.85,
  }
}

export { Input };
