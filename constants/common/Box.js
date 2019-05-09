import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Box = ({ image, name, genre, rating, duration}) => (
    <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height * 0.2, marginTop:30}}>
        <View style={{position:'relative', top:0, left:0, width:'100%', height:'90%'}}>
            <Image source={{ uri: image }} 
                    style={{borderRadius:10, position:'absolute', top:0, left:'5%', width:'90%', height:'100%'}} />
            <View style={{borderRadius:10, position:'absolute', bottom:'5%', left:'10%', zIndex:2}} >
                <Text style={{color:'white', fontSize:24}}>{name}</Text>
                <Text style={{color:'white', fontSize:12}}>{genre}</Text>
            </View>
        </View>
        <View style={{paddingLeft:'5%', flexDirection:'row', alignItems:'center', marginTop:5}}>
            <MaterialIcons name='star-border' size={20} color='#DC2F2F' />
            <Text style={{marginLeft:5}}>{rating}</Text>
            <Text style={{marginLeft:Dimensions.get('window').width - 120}}>{duration}h</Text>
        </View>
    </View>
);

export { Box };
