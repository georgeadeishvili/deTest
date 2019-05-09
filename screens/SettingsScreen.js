import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Button } from '../constants/common';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  logOutButtonPressed = () => {
    this.props.logoutUser(this.props.screenProps.nav);
  }

  render() {
    console.log(this.props.username)

      const { container, upContainer, circleContainer, circleText, descContainer, mailContainer, btnStyle, bottomContainer } = styles;
    return (
      <View style={container}>
        <View style={upContainer}>
          <View style={circleContainer}>
            <Text style={circleText}>
              {this.props.username &&
                this.props.username[0] + this.props.username[1]}
            </Text>
          </View>
          <View style={descContainer}>
            <Text style={{ fontSize: 20 }}>
              {this.props.username && this.props.username}
            </Text>
            <View style={mailContainer}>
              <AntDesign name="mail" size={14} color="#3389EE" />
              <Text
                style={{
                  color: "rgba(36, 37, 61, 0.5)",
                  fontSize: 14,
                  marginLeft: 5,
                  fontWeight: "bold"
                }}
              >
                contact@systemcorp.ai
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={btnStyle} onPress={() => this.props.navigation.navigate('Reset')}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Reset Password
          </Text>
          <Entypo name="chevron-right" size={20} color="#3389EE" />
        </TouchableOpacity>
        <View
          style={{
            height: 1.2,
            width: "95%",
            alignSelf: "center",
            backgroundColor: "#E0E0E1"
          }}
        />
        <View style={bottomContainer}>
          <Button long text="Log Out" color="#FF2D55" textColor='white' style={{justifySelf: 'end'}} onPress={() => this.logOutButtonPressed()} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    paddingTop:25,
    paddingBottom: 25,
    height: Dimensions.get('window').height
  },
  upContainer: {
    flexDirection: 'row',
    width:"100%",
    padding: 15
  },
  circleContainer: {
    width:100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#51F4AD',
    justifyContent:'center',
    alignItems:'center'
  },
  circleText: {
    color: 'white',
    fontSize: 30,
    fontWeight:'bold',
    opacity:0.7
  },
  descContainer: {
    height: 100,
    padding: 15,
    justifyContent: 'space-around'
  },
  mailContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  },
  btnStyle: {
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 15,
  },
  bottomContainer: {
    height: '65%',
    justifyContent:'flex-end',
  }
}

const mapStateToProps = (state) => {
  const { email, username } = state.auth;
  const auth = state.auth

  return { email, username, auth };
}

export default connect(mapStateToProps, { logoutUser })(SettingsScreen);
