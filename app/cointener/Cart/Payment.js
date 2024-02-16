import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppButton from '../../component/Button/AppButton'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'

export default function Payment({navigation}) {
  return (
    <>
    <View style={{ padding: 6 }}>
      <Text style={{ fontSize:moderateScale(25), marginTop:verticalScale(10), color: 'black' }}>Shipping address</Text>
      <View style={style.addressbox}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: moderateScale(22), color: "black" }}>Parth Patoliya</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: moderateScale(22), color: '#DB3022', marginLeft: 150 }}>Change</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: moderateScale(18), marginTop: moderateScale(15) }}>3 Newbridge Court</Text>
        <Text style={{ fontSize: moderateScale(18), }}>Chino Hills, CA 91709,United States</Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: moderateScale(30) }}>
        <Text style={{ fontSize: moderateScale(25), color: "black" }}>Payment</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: moderateScale(22), color: '#DB3022', marginLeft: horizontalScale(203) }}>Change</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{width:"28%",height:verticalScale(60),backgroundColor:"white", shadowRadius: 30, elevation: 4, shadowOpacity: 0.10,borderRadius: 10,marginTop:verticalScale(15) }}>
        <Image
          source={require('../../../assets/images/MasterCard.jpg')}
          style={{ width: "100%", height: "100%", borderRadius: moderateScale(10), shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, }}
        />
        </View>
       
        <Text style={{ fontSize: moderateScale(22), color: "black", marginTop: verticalScale(40), marginLeft: horizontalScale(20) }}>**** **** ****3947</Text>
      </View>

      <Text style={{ fontSize: moderateScale(25), color: "black", marginTop: verticalScale(35) }}>Delivery method</Text>

      <View style={{ flexDirection: 'row' }}>

        <View style={{width:"30%",height:verticalScale(70),borderRadius:moderateScale(10),shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, marginTop: 30,}}>
        <Image
          source={require('../../../assets/images/ss1.png')}
          style={{ width:"100%", height: verticalScale(70), borderRadius: 10, }}
        />
        </View>

        <View style={{width:"30%",height:verticalScale(70),borderRadius:moderateScale(10),shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, marginTop:verticalScale(30),marginLeft:horizontalScale(15)}}>
        <Image
          source={require('../../../assets/images/ss2.png')}
          style={{ width:"100%", height: verticalScale(70), borderRadius: moderateScale(10), }}
        />
        </View>
        
        <View style={{width:"30%",height:verticalScale(70),borderRadius:moderateScale(10),shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, marginTop: verticalScale(30),marginLeft:horizontalScale(15)}}>
        <Image
          source={require('../../../assets/images/ss3.png')}
          style={{ width:"100%", height: verticalScale(70), borderRadius: moderateScale(10), }}
        />
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <Text style={{ fontSize: moderateScale(20), }}>Order :</Text>
        <Text style={{ fontSize: moderateScale(20), color: 'black', marginLeft: horizontalScale(268) }}>112$</Text>      
      </View>

      <View style={{ flexDirection: 'row', marginTop: verticalScale(5) }}>
        <Text style={{ fontSize: moderateScale(22), }}>Delivery :</Text>
        <Text style={{ fontSize: moderateScale(22), color: 'black', marginLeft: horizontalScale(240) }}>015$</Text>      
      </View>

      <View style={{ flexDirection: 'row', marginTop:  verticalScale(5)}}>
        <Text style={{ fontSize: moderateScale(25), }}>Summary :</Text>
        <Text style={{ fontSize: moderateScale(25), color: 'black', marginLeft: horizontalScale(213) }}>227$</Text>      
      </View>

      

    </View>
    <>
    <View style={{marginTop: verticalScale(30)}}>
        <AppButton 
          titel="SUBMIT-ORDER"
          onPress={() => navigation.navigate('Success')}
        />
      </View>
    </>
    </>
  )
}
const style = StyleSheet.create({
  addressbox: {
    width: "100%",
    height:  verticalScale(120),
    backgroundColor: 'white',
    marginTop:  verticalScale(20),
    borderRadius: moderateScale(10),
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 4,
    padding: 20
  }
})