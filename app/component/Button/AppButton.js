import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'

export default function AppButton({titel,onPress}) {
  return (
    <View>
      <TouchableOpacity style={{width:'90%',height:verticalScale(40),backgroundColor:'#DB3022',borderRadius:moderateScale(40),padding:11,marginLeft:horizontalScale(20),shadowOpacity: 0.10,shadowRadius: 30,elevation: 4,}} 
      onPress={onPress}>
            <Text style={{fontSize:moderateScale(15),color:"white",textAlign:'center'}}>{titel}</Text>
      </TouchableOpacity>
    </View>
  )
}