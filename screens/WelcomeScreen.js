import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '../constants/common';

export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={{height:'100%',justifyContent:'space-around'}}>
                <Image source={require('../assets/images/triangle.png')} style={{alignSelf:'center', marginTop:'20%'}} />
                <Text style={{textAlign: 'center'}}>
                    A simple React Native app to demonstrate our capabilities.
                </Text>
                <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <Button
                        text='Log In'
                        color='#12CE9E'
                        textColor='white'
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                    <Button 
                        text='Sign Up'
                        color='#1867B0'
                        textColor='white'
                        onPress={() => this.props.navigation.navigate('Register')}
                    />
                </View>
            </View>
        );
    }
}