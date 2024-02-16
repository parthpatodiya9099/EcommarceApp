import { View, Text, Image } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <View>
      <Image 
        source={require('../../assets/images/launch_screen.png')}
        style={{width:200,height:200,marginTop:240,marginLeft:100}}
      />
      
    </View>
  )
}