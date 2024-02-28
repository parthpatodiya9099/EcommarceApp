import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import TaskBtn from './TaskBtn'
import { Image } from 'react-native'
export default function SplaceScreenTask() {
    return (
        <View>
            <StatusBar
                hidden={true}
                backgroundColor={'#262262'}
            />
            <View style={style.mainbox}>
                <View style={style.imgbox}>
                    <View style={style.imgbox1}>
                        <Image
                            source={require('./../../../assets/image_85(2).png')}

                        />
                    </View>
                    <View style={style.imgbox2}>
                        <Image
                            source={require('./../../../assets/image_84(1).png')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainbox: {
        width: '100%',
        height: '100%',
        backgroundColor: '#262262'
    },
    imgbox1: {
        width: '50%',
        height: 150,
        marginLeft: 100,
        justifyContent: 'center',
        alignItems: 'center'

    },
    imgbox2: {
        width: '60%',
        height: 110,
        marginLeft: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgbox: {
        marginTop: 250
    }
})