import React, { Component } from 'react';
import { View, Text, Dimensions, Image, KeyboardAvoidingView } from 'react-native';
import { connect } from "react-redux";
import {
    oldPasswordEntered,
    newPasswordEntered,
    changePassword
} from '../redux/actions';
import { Input, Button } from '../constants/common';

class ResetScreen extends Component {
    onOldPasswordChange(text) {
        this.props.oldPasswordEntered(text)
    }
    onNewPasswordChange(text) {
        this.props.newPasswordEntered(text)
    }
    onButtonPressed() {
        const { password, newPassword } = this.props;
        this.props.changePassword({password, newPassword}, this.props.navigation);
    }

    render() {
        return (
          <KeyboardAvoidingView
            behavior="position"
            contentContainerStyle={{
              width: Dimensions.get("window").width,
              height: '100%'
            }}
          >
            <View style={styles.container}>
              <Image
                source={require("../assets/images/logo.png")}
                style={{ width: Dimensions.get("window").width }}
              />
              <View style={styles.subContaiener}>
                <Input
                  placeholder="******"
                  label="Old Password"
                  secureTextEntry
                  onChangeText={this.onOldPasswordChange.bind(this)}
                  value={this.props.password}
                />
                <Input
                  placeholder="******"
                  label="New Password"
                  secureTextEntry
                  onChangeText={this.onNewPasswordChange.bind(this)}
                  value={this.props.newPassword}
                />
                <Input
                  placeholder="******"
                  label="Verify New Password"
                  secureTextEntry
                />
              </View>
              <Button
                text="Reset Password"
                color="#12CE9E"
                long
                round
                textColor="white"
                onPress={this.onButtonPressed.bind(this)}
              />
            </View>
          </KeyboardAvoidingView>
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

const mapStateToProps = state => {
  const { password, newPassword, error, loading } = state.res;

  return { password, newPassword, error, loading };
};

export default connect(mapStateToProps, {oldPasswordEntered, newPasswordEntered, changePassword})(ResetScreen);
