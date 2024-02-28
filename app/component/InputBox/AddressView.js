import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
export default function AddressView({name,address,city,state,zipcode,contry,email,onPressD,onPressE}) {
    return (
        <View>
            <View style={style.main}>
                <View style={style.box1}>
                    <Text style={style.name}>{name}</Text>
                    {/* <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 15 }}>Email:- {email}</Text> */}
                    <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 13, }}>Address:- {address}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 15 }}>City:- {city}</Text>
                        <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 15 }}>State:- {state}</Text>
                    </View>
                    <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 15 }}>ZipCode:- {zipcode}</Text>
                    <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 15 }}>Contry:- {contry}</Text>


                </View>
                <View style={style.box2}>
                    <TouchableHighlight style={style.btn} onPress={onPressD}>
                        <MaterialCommunityIcons name='delete' color='black' size={30} />
                    </TouchableHighlight>
                    <TouchableHighlight style={style.btn} onPress={onPressE}>
                        <MaterialCommunityIcons name='playlist-edit' color='black' size={30} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        width: '90%',
        height: 150,
        backgroundColor: "white",
        marginLeft: 20,
        shadowOpacity: 0.10,
        shadowRadius: 30,
        elevation: 4,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: 'row'
    },
    box1: {
        width: '70%',
        height: '100%',
        borderRadius: 20,
    },
    box2: {
        width: '30%',
        height: '100%',
        borderRadius: 20,
        flexDirection: 'row'
    },
    name: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15
    },
    btn: {
        width:'50%',
        marginTop:10
    }
})