import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../Constant/Metrics'

export default function CategoriesName({CategoriName,onPress}) {
  return (
    <View>
      <TouchableOpacity style={{width:'100%',height:verticalScale(50),borderWidth:0.5,borderColor:'gray',padding:10,paddingLeft:horizontalScale(20)}} onPress={onPress}>
            <Text style={{fontSize:moderateScale(22),color:'black',fontWeight:100}}>{CategoriName}</Text>
      </TouchableOpacity>
    </View>
  )
}