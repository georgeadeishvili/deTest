import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import {
    usernameChanged,
    regEmailChanged,
    regPasswordChanged,
    regRePasswordChanged,
    registerUser
} from '../redux/actions';
import { Input, Button } from '../constants/common';

class RegisterScreen extends Component {

    onUsernameChange(text) {
        this.props.usernameChanged(text);
    }

    onEmailChange(text) {
        this.props.regEmailChanged(text);
    }

    onPasswordChange(text) {
        this.props.regPasswordChanged(text);
    }

    onRePasswordChange(text) {
        this.props.regRePasswordChanged(text);
    }

    onButtonPress() {
        const { email, password, username } = this.props;
        this.props.registerUser({ email, password, username },this.props.navigation);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/images/logo.png')} style={{width: Dimensions.get('window').width}} />
                <View style={styles.subContaiener}>
                    <Input
                        placeholder='Pick your username'
                        label='USERNAME'
                        onChangeText={this.onUsernameChange.bind(this)}
                        value={this.props.username}
                     />
                     <Input
                        placeholder='Enter your Email'
                        label='EMAIL'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                     />
                     <Input
                         placeholder='Enter Password'
                         label='PASSWORD'
                         secureTextEntry
                         onChangeText={this.onPasswordChange.bind(this)}
                         value={this.props.password}
                      />
                      <Input
                          placeholder='Re-enter Password'
                          label='RE-PASSWORD'
                          secureTextEntry
                          onChangeText={this.onRePasswordChange.bind(this)}
                          value={this.props.rePassword}
                       />
                      <Button
                        text='Register'
                        color='#12CE9E'
                        long
                        textColor='white'
                        onPress={this.onButtonPress.bind(this)}
                      />
                  </View>
                  <Button
                    text='Have an account? Login here'
                    color='transparent'
                    long
                    textColor='#12CE9E'
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

const mapStateToProps = (state) => {
  const { username, email, password, rePassword, error, loading } = state.reg;

  return { username, email, password, rePassword, error, loading };
};

export default connect(mapStateToProps, { usernameChanged, regEmailChanged, regPasswordChanged, regRePasswordChanged, registerUser })(RegisterScreen);
