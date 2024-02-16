import { View, Text, StyleSheet, StatusBar, TextInput, Button, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../component/Button/AppButton';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logingEmail } from '../redux/slices/authSlice';
export default function Login({ navigation }) {
  const dispatch = useDispatch()
  const LoginSchema = yup.object({
    email: yup.string().required(),
    Password: yup.string().required()
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      Password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(logingEmail(values))
      resetForm()
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
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <MaterialIcons style={style.icon} name="keyboard-arrow-left" color={'black'} size={34} />
      </TouchableOpacity>

      <Text style={style.text}>Login</Text>

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
      <TextInput
        style={style.inputtext}
        placeholder='Password'
        placeholderTextColor="grey"
        name='Password'
        onChangeText={handleChange('Password')}
        onBlur={handleBlur('Password')}
        value={values.Password}
      />
      {
        touched.Password && errors.Password ? <Text style={style.err}>{errors.Password}</Text> : null
      }
      <TouchableOpacity onPress={() => navigation.navigate('Password')}>
        <Text style={{ color: 'black', marginLeft: 230, marginTop: 10 }}>Forget Your Password <Feather style={style.icon} name="chevrons-right" color={'red'} size={19} /></Text>
      </TouchableOpacity>
      <View style={{ marginTop: 30 }}>
        <AppButton
          titel="LOGIN"
          onPress={handleSubmit}
        />
      </View>

      <View style={style.parent}>
        <Text style={style.textStyle}>Or sign up with social account</Text>
      </View>

      <View style={style.btnparent}>
        <Pressable
          style={style.btnstyle}
        >
          <Image
            source={require("../../assets/images/google.jpg")}
            style={{ width: 40, height: 40, borderRadius: 20 }} />

        </Pressable>
        <Pressable
          style={style.btn}
          onPress={() => ('')}>
          <MaterialIcons name="facebook" color={'darkblue'} size={42} marginLeft={2} />
        </Pressable>
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
    height: 1000,
    backgroundColor: '#f5f5f5',
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
    backgroundColor: 'red',
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 30,
    marginTop: 24,
    alignItems: 'center',
    color: 'white',
  },

  input1: {
    marginTop: 70,
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
    borderRadius: 5,
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 4,
  },
  textStyle: {
    color: 'black',
    marginHorizontal: 16,
    marginTop: 130,
    alignItems: 'center'
  },
  parent: {
    alignItems: 'center',
    marginTop: 70
  },
  btnstyle: {
    marginTop: 10,
    backgroundColor: 'white',
    padding:26,
    width: 95,
    marginHorizontal:16,
    borderRadius: 30,
    marginLeft: 80,
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 4,
  },
  btn: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 25,
    width: 95,
    borderRadius: 30,
    marginRight: 90,
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 4,
  },
  btnparent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})