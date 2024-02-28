import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import TaskBtn from './TaskBtn'
import { Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Login() {
    return (
        <View>
            <View style={style.mainbox}>
                <View style={style.imgbox}>
                    <Image
                        source={require('../../../assets/images/082adf0d7d807aca08fd8b78ed95461e.png')}
                        style={{ width: "90%", height: "100%" }}
                    />
                </View>
                <View style={style.txtbox}>
                    <Text style={style.txt1}>Register</Text>
                    <Text style={style.txt2}>Just fill up details below and you are good to go !</Text>
                </View>
                <View style={style.inputbox}>
                    <TextInput
                        placeholder='Name'
                        style={style.input}
                        placeholderTextColor={'white'}
                    />
                    <TextInput
                        placeholder='Enter Email Address'
                        style={style.input}
                        placeholderTextColor={'white'}
                    />
                </View>
                <TaskBtn
                    title={'Sing Up'}
                />
                <View style={{ flexDirection: 'row' }}>
                    <View style={style.line1}></View>
                    <Text style={style.txtcont}>Or continue with </Text>
                    <View style={style.line2}></View>
                </View>

                <View style={style.singbox}>
                    <View style={style.googlebox}>
                    <View style={style.iconimg}>
                            <Image
                                source={require('../../../assets/Buttons.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                    </View>
                    <View style={style.googlebox}>
                        <MaterialIcons name="apple" color={'white'} size={42} marginLeft={2} style={{
                            textAlign: 'center', marginTop: 10
                        }} />
                    </View>
                    <View style={style.googlebox}>
                    <View style={style.iconimg}>
                            <Image
                                source={require('../../../assets/Buttons1.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={style.log}>
                        <Text style={style.logtxt}>Already have an account ?<Text style={style.logtxt2}> Log In</Text></Text>
                    </TouchableOpacity>
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
        height: 100,
        marginLeft: 26,
        marginTop: 100,
        padding: 20,
        paddingRight: 10
    },
    txtbox: {
        width: '90%',
        height: 100,
        marginLeft: 30,
        marginTop: 10
    },
    txt1: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
    txt2: {
        fontSize: 16,
        marginTop: 10,
        color: 'white',
        textAlign: 'center'
    },
    inputbox: {
        width: '90%',
        height: 150,
        marginLeft: 20
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#36336a',
        borderRadius: 10,
        marginTop: 15,
        color:'white',
        paddingLeft:20
        
    },
    line1: {
        width: '25%',
        height: 1,
        backgroundColor: 'white',
        marginTop: 120,
        marginLeft: 30
    },
    line2: {
        width: '25%',
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
        flexDirection: 'row',
    },
    googlebox: {
        width: '30%',
        height: 70,
        marginLeft: 15,
        borderWidth: 0.5,
        borderColor: '#f5f5f5',
        borderRadius: 10,
        backgroundColor: 'transparent',

    },
    logtxt:{
        color:'white'
    },
    logtxt2:{
        color:'skyblue'
    },
    log:{
        marginLeft:100,
        marginTop:20
    },
    iconimg:{
        marginLeft: 35,
        marginTop: 20
    }
})