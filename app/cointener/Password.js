import { View, Text, StyleSheet, StatusBar, TextInput, Button, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../component/Button/AppButton';
import * as yup from 'yup';
import { useFormik } from 'formik';
export default function Password({ navigation }) {
  const FormetSchema = yup.object({
    email: yup.string().required(),
  })
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: FormetSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    }
  })
  const { handleBlur, handleChange, touched, errors, values, handleSubmit, setValues, setFieldValue } = formik

  return (
    <View style={style.container}>
      <StatusBar
        animated={true}
        backgroundColor="#f5f5f5"
        barStyle="dark-content"
      />

      <TouchableOpacity onPress={()=>navigation.navigate('login')}>
        <MaterialIcons style={style.icon} name="keyboard-arrow-left" color={'black'} size={34} />
      </TouchableOpacity>

      <Text style={style.text}>Forgot Password</Text>

      <Text style={style.msg}>Please enter Your email address. You will recieve a link to creat a new password via email</Text>

      <TextInput
        style={style.input1}
        placeholder='Email'
        placeholderTextColor="grey"
        name='email'
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
      />
      {
        touched.email && errors.email ? <Text style={style.err}>{errors.email}</Text> : null
      }
      <View style={{ marginTop: 30 }}>
        <AppButton
          titel="SEND"
          onPress={() => navigation.navigate('Product')}
        />
      </View>




    </View>
  )
}
const style = StyleSheet.create({
  err: {
    color: 'red',
    marginLeft: 20
  },
  container: {
    // height : 'auto',
    height: 1000,
    backgroundColor: '#f5f5f5',
    // marginHorizontal : 16,
  },
  text: {
    color: 'black',
    fontSize: 30,
    marginTop: 20,
    marginHorizontal: 16,
  },
  icon: {
    marginTop: 15,
    marginHorizontal: 16,
  },
  buttontxt: {
    // color : 'white',
    backgroundColor: 'red',
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 30,
    marginTop: 40,
    // alignContent : 'center'
    alignItems: 'center',
    color: 'white',
  },

  input1: {
    marginTop: 25,
    // borderWidth : 1,
    marginHorizontal: 16,
    padding: 20,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 4,

  },
  inputtext: {
    marginTop: 15,
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 16,
    color: 'black',
    borderRadius: 5
  },
  textStyle: {
    color: 'black',
    marginHorizontal: 16,
    marginTop: 130,
    alignItems: 'center'
  },
  btnstyle: {
    backgroundColor: 'white',
    padding: 25,
    width: 90,
    marginHorizontal: 16,
    borderRadius: 30,
    marginLeft: 80,
  },
  msg: {
    color: 'black',
    marginHorizontal: 16,
    // fontSize : 
    marginTop: 74,

  }
})
