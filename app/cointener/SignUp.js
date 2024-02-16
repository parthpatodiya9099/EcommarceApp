
import { View, Text, StyleSheet, StatusBar, TextInput, Button, Pressable, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../component/Button/AppButton';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { authEmialPass, singEmialPass } from '../redux/slices/authSlice';
export default function SignUp({ navigation }) {
  const dispatch = useDispatch()
  const SingUpSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    Password: yup.string().required()
  })
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      Password: ''
    },
    validationSchema: SingUpSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(singEmialPass(values))
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
      {/* <MaterialIcons style={style.icon} name="keyboard-arrow-left" color={'black'} size={20} /> */}
      <Text style={style.text}>Sign up</Text>

      <TextInput
        style={style.inputtext}
        placeholder='Name'
        placeholderTextColor="grey"
        name='username'
        onChangeText={handleChange('username')}
        onBlur={handleBlur('username')}
        value={values.username}
      />
      {
        touched.username && errors.username ? <Text style={style.err}>{errors.username}</Text> : null
      }
      <TextInput
        style={style.inputtext}
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
      <TouchableOpacity style={{ color: 'black', marginLeft: 220, marginTop: 10 }} onPress={() => (navigation.navigate('login'))}>
        <Text>Alreay have an account? <Feather style={style.icon} name="chevrons-right" color={'red'} size={19} /></Text>
      </TouchableOpacity>

      <View style={{ marginTop: 30 }}>
        <AppButton
          titel="SING UP"
          onPress={handleSubmit}
        />
      </View>

      <View style={style.parent}>
        <Text style={style.textStyle}>Or sign up with social account</Text>
      </View>

      <View style={style.btnparent}>
        <Pressable
          style={style.btnstyle}
          onPress={() => ('')}>
          <Image 
            source={require("../../assets/images/google.jpg")}
            style={{ width: 40, height: 40,borderRadius:20 }}
          />
        </Pressable>
        <Pressable
          style={style.btn}
          onPress={() => ('')}>
          <MaterialIcons name="facebook" color={'darkblue'} size={45} marginLeft={2} />
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
    marginTop: 40,
    marginHorizontal: 16,
    fontFamily: 'METRO POLICE BOLD',
    fontWeight: 'bold'
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
  input: {
    marginTop: 56,
    marginHorizontal: 16,
    padding: 20,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 4,
  },
  input1: {
    marginTop: 10,
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
    marginTop: 20,
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
    alignItems: 'center'
  },
  btnstyle: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 25,
    width: 90,
    marginHorizontal: 16,
    borderRadius: 30,
    marginLeft: 80,
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 9,
  },
  btn: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 20,
    width: 90,
    borderRadius: 30,
    marginRight: 90,
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 9,
  },
  btnparent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})