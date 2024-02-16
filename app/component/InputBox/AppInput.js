import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../../Constant/Metrics'

export default function AppInput({type,placeholder}) {
  return (
    <View>
        <TextInput
            style={{width:'90%',height:verticalScale(60),backgroundColor:'white',marginLeft:horizontalScale(20),shadowOpacity: 0.10, shadowRadius: 30, elevation: 4,marginTop:verticalScale(30),borderRadius:5,paddingLeft:horizontalScale(20)}}
            placeholder={placeholder}
            keyboardType={type}
        />
    </View>
  )
}