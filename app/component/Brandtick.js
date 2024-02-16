import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../Constant/Metrics'
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from 'react-native-check-box'

export default function Brandtick({ BrandName }) {
  return (
    <View>
      <View style={{ width: "100%", height: verticalScale(30), marginTop: verticalScale(10), flexDirection: 'row' }}>
        <View style={{ width: '80%', height: '100%', }}>
          <Text style={{ fontSize: moderateScale(20), marginTop: verticalScale(3), marginLeft: horizontalScale(15), color: 'black', fontWeight: 100 }}>{BrandName}</Text>
        </View>
        <View style={{ width: '20%', height: '100%',paddingLeft:horizontalScale(45)}}>
          <CheckBox/>
          
        </View>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
  },
})