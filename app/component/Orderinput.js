import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../Constant/Metrics'

export default function Orderinput({ordernumber,date,TNumber,Quantity,Amount}) {
  return (
    <View>
     <View style={{width:'95%',height:verticalScale(170),padding:15,marginTop:verticalScale(20),backgroundColor:'white',marginLeft:horizontalScale(9),borderRadius:moderateScale(10),shadowOpacity: 1,shadowRadius:20,elevation:4,}}>
        <View style={{flexDirection:'row',}}>
            <Text style={{color:'black',fontSize:moderateScale(22)}}>Order-No:{ordernumber}</Text>
            <Text style={{fontSize:moderateScale(18),marginLeft:horizontalScale(100)}}>{date}</Text>
        </View>
        <Text style={{fontSize:moderateScale(20),marginTop:verticalScale(8)}}>Tracking number: <Text  style={{fontSize:moderateScale(18),color:'black'}}>{TNumber}</Text></Text>
        <View style={{flexDirection:'row',marginTop:verticalScale(8)}}>
            <Text style={{fontSize:moderateScale(18),}}>Quantity:<Text  style={{fontSize:18,color:'black'}}>{Quantity}</Text></Text>
            <Text style={{fontSize:moderateScale(18),marginTop:verticalScale(5),marginLeft:horizontalScale(139)}}>Total Amount:<Text  style={{fontSize:moderateScale(18),color:'black',}}>{Amount}</Text></Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{width:horizontalScale(120),height:verticalScale(50),borderWidth:1,borderRadius:25,shadowOpacity: 0.25,shadowRadius: 30, elevation:4,backgroundColor:'white',padding:12,marginTop:10}}>
            <Text style={{fontSize:moderateScale(18),color:'black',marginLeft:horizontalScale(22)}}>Details</Text>
        </TouchableOpacity>
        <Text style={{color:'green',fontSize:moderateScale(18),marginLeft:horizontalScale(150),marginTop:verticalScale(15)}}>Delivered</Text>
        </View>
        
      </View>
    </View>
  )
}