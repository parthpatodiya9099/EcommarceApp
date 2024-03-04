import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import HaderCom from './Search';
export default function TaskScreen1() {
    return (
        <View>
            <StatusBar
                backgroundColor='#dcdcdc'
                barStyle="dark-content"
            />
           <View style={style.box1}>
                <View><Text style={style.txt}>VDB Landing Page</Text></View>
                <TouchableOpacity style={style.icon}>
                    <Feather name='shopping-bag' color={'black'} size={20} />
                </TouchableOpacity>
            </View>

        </View>
    )
}
const style = StyleSheet.create({
    icon1:{
        width:70,
        height:70,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ececec',
        marginTop:610,
        marginLeft:160,
    },
    icon2:{
        width:50,
        height:50,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    box1: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#dcdcdc',
        alignItems: 'center'
      },
      txt: {
        fontSize: 20,
        marginLeft: 120,
        color: 'black',
        textAlign: 'center',
      },
      icon: {
        marginLeft: 100,
      }
})