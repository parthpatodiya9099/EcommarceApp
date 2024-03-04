import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import TaskBtn from './TaskBtn'
import { Image } from 'react-native'

export default function Otp() {
    return (
        <View>
            <View style={style.mainbox}>
                <View style={style.imgbox}>
                    <Image
                        source={require('../../../assets/images/handotp.png')}
                    // style={{ width: "90%", height: "100%" }}
                    />
                </View>
                <View style={style.txtbox}>
                    <Text style={style.txt1}>OTP Verification</Text>
                    <Text style={style.txt2}>We have sent an OTP to your phone number !</Text>
                </View>
                <View style={style.singbox}>
                    <View style={style.googlebox}>
                        <TextInput
                            ref={et1}
                            style={{ height: '100%', width: '100%', color: 'white' }}
                            keyboardType='numeric'
                            maxLength={1}
                            onChangeText={txt => {
                                if (txt.length >=1){
                                    et2.current.focus()
                                }
                            }}
                        />
                    </View>
                    <View style={style.googlebox}>
                        <TextInput
                            style={{ height: '100%', width: '100%', color: 'white' }}
                            keyboardType='numeric'
                            ref={et2}
                            maxLength={1}
                            
                        />
                    </View>
                    <View style={style.googlebox}>
                        <TextInput
                            style={{ height: '100%', width: '100%', color: 'white' }}
                            keyboardType='numeric'
                            ref={et3}
                            maxLength={1}
                        />
                    </View>
                    <View style={style.googlebox}>
                        <TextInput
                            style={{ height: '100%', width: '100%', color: 'white' }}
                            keyboardType='numeric'
                            ref={et4}
                            maxLength={1}

                        />
                    </View>
                </View>
                <View style={style.timer}>
                    <Text style={style.timetxt1}>00:120 Sec</Text>
                    <Text style={style.timetxt2}>Didn't receive OTP ?<Text style={style.timetxt3}> Resend OTP</Text></Text>
                </View>
                <View style={style.veribtn}>
                    <TaskBtn
                        title={'Verify'}
                    />
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
    imgbox: {
        width: '90%',
        height: 200,
        marginLeft: 30,
        marginTop: 40,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtbox: {
        width: '90%',
        height: 100,
        marginLeft: 20,
        marginTop: 10
    },
    txt1: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
    txt2: {
        fontSize: 14,
        marginTop: 10,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center'
    },
    inputbox: {
        width: '90%',
        height: 100,
        marginLeft: 20
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 15
    },
    line1: {
        width: '30%',
        height: 1,
        backgroundColor: 'white',
        marginTop: 120,
        marginLeft: 15
    },
    line2: {
        width: '30%',
        height: 1,
        backgroundColor: 'white',
        marginTop: 120,
        marginLeft: 15,
        marginRight: 15
    },
    txtcont: {
        color: 'white',
        marginTop: 115,
        marginLeft: 15
    },
    singbox: {
        width: '90%',
        height: 70,
        marginLeft: 20,
        marginTop: 30,
        flexDirection: 'row'
    },
    googlebox: {
        width: '20%',
        height: 65,
        marginLeft: 15,
        borderWidth: 0.5,
        borderColor: '#f5f5f5',
        borderRadius: 10,
        backgroundColor: 'transparent',

    },
    timer: {
        width: '90%',
        height: 100,
        marginLeft: 20,
        marginTop: 30,
    },
    timetxt1: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20
    },
    timetxt2: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20
    },
    timetxt3: {
        color: 'skyblue',
        textAlign: 'center',
        marginTop: 20
    },
    veribtn: {
        marginTop: 100
    }
})