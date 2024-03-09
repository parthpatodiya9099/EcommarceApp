import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../Constant/Metrics'

export default function Orderinput({ordernumber,date,Quantity,Amount,onPress}) {
  return (
    <View>
     <View style={{width:'95%',height:verticalScale(170),padding:15,marginTop:verticalScale(20),backgroundColor:'white',marginLeft:horizontalScale(9),borderRadius:moderateScale(10),shadowOpacity: 1,shadowRadius:20,elevation:4,}}>
        <View style={{flexDirection:'row',}}>
            <Text style={{color:'black',fontSize:moderateScale(22)}}>Order-No:{ordernumber}</Text>
            <Text style={{fontSize:moderateScale(18),marginLeft:horizontalScale(100)}}>{date}</Text>
        </View>
      
        <View style={{flexDirection:'row',marginTop:verticalScale(12)}}>
            <Text style={{fontSize:moderateScale(18),}}>Quantity:<Text  style={{fontSize:18,color:'black'}}>{Quantity}</Text></Text>
            <Text style={{fontSize:moderateScale(18),marginTop:verticalScale(5),marginLeft:horizontalScale(139)}}>Total Amount:<Text  style={{fontSize:moderateScale(18),color:'black',}}>{Amount}</Text></Text>
        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <TouchableOpacity style={{width:horizontalScale(120),height:verticalScale(50),borderWidth:1,borderRadius:25,shadowOpacity: 0.25,shadowRadius: 30, elevation:4,backgroundColor:'white',padding:12,marginTop:10}} onPress={onPress}>
            <Text style={{fontSize:moderateScale(18),color:'black',marginLeft:horizontalScale(22)}}>Details</Text>
        </TouchableOpacity>
        <Text style={{color:'green',fontSize:moderateScale(18),marginLeft:horizontalScale(130),marginTop:verticalScale(15)}}>Delivered</Text>
        </View>
        
      </View>
    </View>
  )
}