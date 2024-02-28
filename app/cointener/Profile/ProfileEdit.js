import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../component/Button/AppButton';
import ImagePicker from 'react-native-image-crop-picker';
// import * as ImagePicker from 'react-native-image-picker';
export default function ProfileEdit() {
    const [model, Setmodel] = useState(false)
    const handlemodle = () => {
        Setmodel(true)
    }
    const handleimages = () => {
        Setmodel(false)
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }
    const handlecamera = () => {
        Setmodel(false)
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }
    return (
        <View>
            <View style={style.box1}>
                <View style={style.imgbox}>

                    <TouchableOpacity style={style.btnbox} onPress={() => handlemodle()}>
                        <Feather name='camera' color={'white'} size={35} style={{ marginLeft: 12, marginTop: 10 }} />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={style.box2}>
                <TextInput
                    placeholder='Please Enter Your FullName'
                    style={{ width: '100%', height: '100%' }}
                />
            </View>
            <View style={style.box2}>
                <TextInput
                    placeholder='Please Enter Email-Id'
                    style={{ width: '100%', height: '100%' }}
                />
            </View>
            <View style={style.box2}>
                <TextInput
                    placeholder='Please Enter Your Mobile Number'
                    style={{ width: '100%', height: '100%' }}
                />
            </View>

            <View style={style.box3}>
                <AppButton
                    titel={'Submit'}
                />
            </View>

            <View>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={model}
                >
                    <View style={style.modle}>
                        <TouchableOpacity style={style.cbtn} onPress={() => handlecamera()} >
                            <Feather name='camera' size={35} color={'black'} style={{ textAlign: 'center', marginTop: 10 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={style.ibtn} onPress={() => handleimages()}>
                            <Feather name='image' size={35} color={'black'} style={{ textAlign: 'center', marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>


                </Modal>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    box1: {
        width: 300,
        height: 200,
        marginLeft: 45,
        flexDirection: 'row',
        marginTop: 20
    },
    imgbox: {
        width: 200,
        height: 200,
        backgroundColor: 'black',
        marginLeft: 45,
        borderRadius: 100
    },
    btnbox: {
        width: 60,
        height: 60,
        backgroundColor: 'green',
        borderRadius: 100,
        marginLeft: 120,
        marginTop: 140,
        shadowOpacity: 0.10,
        shadowRadius: 30,
        elevation: 4,
    },
    box2: {
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 20,
        paddingLeft: 20,
        shadowOpacity: 0.10,
        shadowRadius: 30,
        elevation: 4,
    },
    box3: {
        width: '90%',
        height: 40,
        marginLeft: 20,
        marginTop: 50,
        borderRadius: 20,

    },
    modle: {
        width: '100%',
        height: '10%',
        alignContent: 'center',
        backgroundColor: 'white',
        marginTop: 700,
        zIndex: 1,
        flexDirection: 'row'
    },
    cbtn: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        marginLeft: 10,
        shadowOpacity: 0.10,
        shadowRadius: 30,
        elevation: 4,
        marginTop: 10
    },
    ibtn: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        marginLeft: 10,
        shadowOpacity: 0.10,
        shadowRadius: 30,
        elevation: 4,
        marginTop: 10
    }
})