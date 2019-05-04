import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AntDesign, Entypo } from '@expo/vector-icons';

class SettingsScreen extends React.Component {

  render() {
    console.log(this.props.username)

      const { container, upContainer, circleContainer, circleText, descContainer, mailContainer, btnStyle } = styles;
    return (
      <View style={container}>
        <View style={upContainer}>
          <View style={circleContainer}>
            <Text style={circleText}>{this.props.username[0]+this.props.username[1]}</Text>
          </View>
          <View style={descContainer}>
            <Text style={{fontSize:20}}>{this.props.username}</Text>
            <View style={mailContainer}>
              <AntDesign name='mail' size={14} color='#3389EE' />
              <Text style={{color:'rgba(36, 37, 61, 0.5)', fontSize: 14, marginLeft:5, fontWeight:'bold'}}>contact@systemcorp.ai</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={btnStyle}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>Reset Password</Text>
          <Entypo name='chevron-right' size={20} color='#3389EE' />
        </TouchableOpacity>
        <View style={{height:1.2,width:'95%', alignSelf:'center', backgroundColor:'#E0E0E1'}} />
      </View>
    );
  }
}

const styles = {
  container: {
    width: '100%',
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
  }
}

const mapStateToProps = (state) => {
  const { email, username } = state.auth;
  const auth = state.auth

  return { email, username, auth };
}

export default connect(mapStateToProps)(SettingsScreen);
