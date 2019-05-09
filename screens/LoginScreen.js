import React, { Component } from 'react';
import { View, Text, Image, Dimensions, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../redux/actions';
import { Input, Button } from '../constants/common';

class LoginScreen extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password },this.props.navigation);
    }

    render() {
        return (
          <View style={styles.container}>
            <Image
              source={require("../assets/images/logo.png")}
              style={{ width: Dimensions.get("window").width }}
            />
            <View
              behavior="height"
              style={styles.subContaiener}
            >
              <KeyboardAvoidingView behavior="height">
                <Input
                  placeholder="Type your email here..."
                  label="EMAIL"
                  onChangeText={this.onEmailChange.bind(this)}
                  value={this.props.email}
                />
                <Input
                  placeholder="******"
                  label="PASSWORD"
                  secureTextEntry
                  onChangeText={this.onPasswordChange.bind(this)}
                  value={this.props.password}
                />
              </KeyboardAvoidingView>
              <Button
                text="Log In"
                color="#12CE9E"
                long
                round
                style={{ marginTop: 5 }}
                textColor="white"
                onPress={this.onButtonPress.bind(this)}
              />
            </View>
            <Button
              text="Sign Up Here"
              color="transparent"
              long
              round
              textColor="#12CE9E"
              onPress={() => {
                this.props.navigation.navigate("Register");
              }}
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
        height: '35%',
        justifyContent:'space-between'
    }
}

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);
