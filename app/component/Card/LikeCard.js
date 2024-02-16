import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';
export default function LikeCard({imgurl,product,price,titel}) {
  return (
    <View>
       <View style={{ width:horizontalScale(160), height:verticalScale(200), marginLeft:horizontalScale(20), marginTop:verticalScale(7),borderRadius:moderateScale(10)}}>
            <Image
              source={imgurl}
              style={{ width: '100%', height: '100%',borderRadius:moderateScale(10) }}
            />
            <View style={{ flexDirection: 'row', marginTop:verticalScale(5)}}>
              <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
              <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
              <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
              <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
              <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
              <Text>(10)</Text>
              <TouchableOpacity style={{ width:horizontalScale(37), height: '100%', borderWidth:0.5, borderColor: "black", marginLeft:horizontalScale(20), borderRadius: moderateScale(160), backgroundColor: 'white', padding: 7, paddingRight:horizontalScale(4)}}>
                <Feather name="heart" color='black' size={moderateScale(20)} />
              </TouchableOpacity>
            </View>
            <Text>{titel}</Text>
            <Text style={{ fontSize: moderateScale(23), color: 'black' }}>{product}</Text>
            <Text style={{ fontSize: moderateScale(18), color: 'black' }}>{price}</Text>
          </View>
    </View>
  )
}
const style = StyleSheet.create({
   
})