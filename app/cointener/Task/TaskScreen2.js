import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function TaskScreen2() {
    return (
        <View>
            <StatusBar
                backgroundColor='#dcdcdc'
                barStyle="dark-content"
            />
            <View style={style.box1}>
                <View><Text style={style.txt}>Favorites & Collection</Text></View>
                <TouchableOpacity style={style.icon}>
                    <Feather name='shopping-bag' color={'black'} size={20} />
                </TouchableOpacity>
            </View>
            <View style={style.favoritebox}>
                <View style={style.iconbox}>
                    <AntDesign name='heart' color={'#dcdcdc'} size={35} style={{ textAlign: 'center', marginTop: 17 }} />
                </View>
                <View style={style.txtbox}>
                    <View style={{ marginLeft: 10, marginTop: 10 }}>
                        <Text style={style.txt2}>Favorites</Text>
                        <Text style={style.txt0}>0 Items <Text style={style.txt1}> Default Collection <Text> <AntDesign name='checkcircle' color={'green'} size={17} style={{ textAlign: 'center', marginTop: 19 }} /></Text></Text></Text>
                    </View>

                </View>
                <View style={style.iconboxtwobox}>
                    <Feather name='upload' color={'gray'} size={25} style={{ textAlign: 'center' }} />
                    <TouchableOpacity style={style.iconbox2}>
                        <Feather name='more-horizontal' color={'white'} size={20} style={{ textAlign: 'center', marginTop: 3 }} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={style.icon1}>
                <TouchableOpacity style={style.icon2}>
                    <Feather name='search' color='black' size={25} />
                </TouchableOpacity>
            </View> */}
        </View>
    )
}
const style = StyleSheet.create({
    favoritebox: {
        width: '95%',
        height: 85,
        marginLeft: 10,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 10,
        padding: 8,
        flexDirection: "row",
    },
    iconbox: {
        width: '20%',
        height: '100%',
        backgroundColor: '#f8f8ff',
        borderRadius: 10,
    },
    txtbox: {
        width: '65%',
        height: '100%',
        borderRadius: 10,
    },
    iconboxtwobox: {
        width: '15%',
        height: '100%',
        borderRadius: 10
    },
    txt0: {
        color: 'black',
    },
    txt1: {
        color: 'gray',
        textAlign: 'center'
    },
    txt2: {
        color: 'black',
        fontSize: 18,
        fontWeight: '900'
    },
    iconbox2: {
        width: 25,
        height: 25,
        backgroundColor: 'gray',
        borderRadius: 100,
        alignItems: 'center',
        marginLeft: 12,
        marginTop: 10
    },
    icon1: {
        width: 70,
        height: 70,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ececec',
        marginTop: 505,
        marginLeft: 160,
    },
    icon2: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
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
        marginLeft: 75,
      }

})