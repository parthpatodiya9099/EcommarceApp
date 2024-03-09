import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Profileinput from '../../component/Profileinput'
import { useDispatch, useSelector } from 'react-redux'
import { logoutuser } from '../../redux/slices/authSlice'

export default function MyProfile({ navigation }) {
  const authdata = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const handleLogOut = () => {
    Alert.alert('Logout Alert ', 'You really want to LogOut ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      { text: 'Ok', onPress:()=>dispatch(logoutuser()) },
    ]);


  }
  return (
    <View>
      <View style={{ flexDirection: 'row', width: "90%", height: 80, marginLeft: 10, marginTop: 10 }}>
        <View style={{ width: 80, height: 80, backgroundColor: 'black', borderRadius: 100 }}>
          <Image
            source={{ uri: authdata.user.imageurl }}
            style={{ width: "100%", height: "100%", borderRadius: 100 }}
          />
        </View>
        <TouchableOpacity style={{ padding: 20, marginLeft: 10 }} onPress={() => navigation.navigate('UpdateProfile')}>
          <Text style={{ fontSize: 22, color: 'black', fontWeight: '900' }}>Parth Patoliya</Text>
          <Text style={{ fontSize: 15, marginTop: 2 }}>parthpatoliya@Gmail.com</Text>
        </TouchableOpacity>
      </View>

      <Profileinput
        name="My Orders"
        titel="Alredy have 12 Orders"
        onPress={() => navigation.navigate('MyOrder')}
      />

      <Profileinput
        name="ShippingAddracs"
        titel="3 ddresses"
        onPress={() => navigation.navigate('Address')}
      />

      <Profileinput
        name="Paymntmethods"
        titel="Visa **34"
      />

      <Profileinput
        name="Promocodes"
        titel="You have promocodes"
      />

      <Profileinput
        name="My  reviews"
        titel="Reviews for 4 items    "
      />

      <Profileinput
        name="Logout"
        titel="Notifications               "
        onPress={() => handleLogOut()}
      />
    </View>
  )
}