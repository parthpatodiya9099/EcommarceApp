import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'
import AppButton from '../../component/Button/AppButton'
import { moderateScale, verticalScale } from '../../Constant/Metrics'

export default function Success({navigation}) {
  return (
    <View>
        <StatusBar 
            backgroundColor='white'
            barStyle="dark-content"
        />
        <View style={style.mainScreen}>
            <View style={style.imgbox}>
                <Image 
                  source={require('../../../assets/images/success.png')}
                  style={{width: "100%", height:"100%"}}
                />
            </View>

            <Text style={{fontSize:moderateScale(30),color:'black',marginTop:verticalScale(20),fontWeight:900}}>Success !</Text>
            <Text style={{fontSize:moderateScale(20),color:'black',marginTop:verticalScale(10),fontWeight:100}}>Your order will be delivered soon.</Text>
            <Text style={{fontSize:moderateScale(20),color:'black',fontWeight:100}}> Thank you for choosing our app!</Text>

            
        </View>
        <View style={{width:"100%",height:'10%',backgroundColor:"white"}}>
              <AppButton 
                titel="CONTINUE SHOPPING"
                onPress={()=>navigation.navigate('Product')}
              />
            </View>
    </View>
  )
}

const style =  StyleSheet.create({
  mainScreen:{
    width:"100%",
    height:"90%",
    backgroundColor:'white',
    padding:20,
    alignItems:'center',
  },
  imgbox:{
    width:"60%",
    height:'30%',
    marginTop:verticalScale(170),
    
  }
})