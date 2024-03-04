import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../component/Button/AppButton';
import ImagePicker from 'react-native-image-crop-picker';
import * as yup from 'yup';
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { UserInfo, UserInfoget, addAddressData } from '../../redux/slices/authSlice';
export default function ProfileEdit() {
    const dispatch = useDispatch();
    const [model, Setmodel] = useState(false)
    const authdata = useSelector(state => state.auth)
    useEffect(()=>{
        UserInfo()
    },[])
    
    const ProfileUpadate = yup.object({
        mobilenumber: yup.string().required(),
        image: yup.mixed().required()
    })
    const formik = useFormik({
        initialValues: {
            mobilenumber: '',
            image: ''
        },
        validationSchema: ProfileUpadate,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm()
        }
    })
    const handleSubmit = () => {
        console.log(authdata.user.uid);
        dispatch(UserInfo({...authdata.user,...values, uid: authdata.user.uid }))
    }
    const { handleBlur, handleChange, touched, errors, values, setFieldValue } = formik
    const handlemodle = () => {
        Setmodel(true)
    }
    const handleimages = () => {
        Setmodel(false)
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            name: 'image',
        }).then(image => {
            setFieldValue('image', image)
        });
    }
    const handlecamera = () => {
        Setmodel(false)
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            name: 'image',
        }).then(image => {
            setFieldValue('image', image)
        });
    }
    return (
        <View>
            <View style={style.box1}>
                <View style={style.imgbox}>
                    <Image
                        source={{uri:authdata.user.imageurl}}
                        style={{ width: "100%", height: "100%", borderRadius: 100 }}
                    />
                    <TouchableOpacity style={style.btnbox} onPress={() => handlemodle()}>
                        <Feather name='camera' color={'white'} size={35} style={{ marginLeft: 12, marginTop: 10 }} />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={style.boxA2}>
                <View style={style.box2}>
                    <TextInput
                        placeholder='Please Enter Your FullName'
                        style={{ width: '100%', height: '100%' }}
                        name='fullname'
                        onBlur={handleBlur('fullname')}
                        onChangeText={handleChange('fullname')}
                        value={authdata.user.name}
                    />
                </View>
                <View style={style.box2}>
                    <TextInput
                        placeholder='Please Enter Email-Id'
                        style={{ width: '100%', height: '100%' }}
                        name='email'
                        onBlur={handleBlur('email')}
                        onChangeText={handleChange('email')}
                        value={authdata.user.email}
                    />
                </View>
                <View style={style.box2}>
                    <TextInput
                        placeholder='Please Enter Your Mobile Number'
                        style={{ width: '100%', height: '100%' }}
                        name='mobilenumber'
                        onBlur={handleBlur('mobilenumber')}
                        onChangeText={handleChange('mobilenumber')}
                        value={values.mobilenumber}
                    />
                </View>

                <View style={style.box3}>
                    <AppButton
                        titel={'Submit'}
                        onPress={() => handleSubmit()}
                    />
                </View>
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
        backgroundColor: '#DB3022',
        borderRadius: 100,
        shadowOpacity: 0.10,
        shadowRadius: 30,
        elevation: 4,
        marginLeft: 65,
        marginTop: 10
    },
    boxA2: {
        marginTop: 60,
    },
    box2: {
        width: '90%',
        height: 50,
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