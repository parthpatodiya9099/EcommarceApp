import { View, Text, Image } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <View>
      <Image 
        source={require('../../assets/images/logo.png')}
        style={{width:100,height:100,marginTop:300,marginLeft:140,justifyContent:'center'}}
      />
      
    </View>
  )
}