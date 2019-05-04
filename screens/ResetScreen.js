import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { Input, Button } from '../constants/common';

class ResetScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/images/logo.png')} style={{width: Dimensions.get('window').width}} />
                <View style={styles.subContaiener}>
                    <Input
                        placeholder='******'
                        label='Old Password'
                        secureTextEntry
                     />
                     <Input
                         placeholder='******'
                         label='New Password'
                         secureTextEntry
                      />
                      <Input
                          placeholder='******'
                          label='Verify New Password'
                          secureTextEntry
                       />
                  </View>
                  <Button
                    text='Reset Password'
                    color='#12CE9E'
                    long
                    textColor='white'
                  />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        paddingTop:50,
        width:'100%',
        height:'100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    subContaiener: {
        height: '50%',
        justifyContent:'space-between'
    }
}

export { ResetScreen };
