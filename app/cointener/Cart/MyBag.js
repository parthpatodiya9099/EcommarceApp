import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BagCard from '../../component/Card/BagCard'
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../component/Button/AppButton';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removefromCart } from '../../redux/slices/CartSlice';

export default function MyBag({ navigation }) {

  const dispatch = useDispatch()
  const handleinc = (qty) => {
    dispatch(increment(qty))
  }
  const handledes = (qty) => {
    dispatch(decrement(qty))
  }
  const handledelete = (id) => {
    dispatch(removefromCart(id))
  }
  const cart = useSelector(state => state.cart)
  const productData = useSelector(state => state.product)

  const AddCartData = cart.cart.map((c) => {
    const productObj = productData.data.find((p) => p.id === c.id)
    return { ...productObj, qty: c.qty }
  })
  const PriceData = AddCartData.map((p)=>{
    const cdata = cart.cart.find((c)=>c.id == p.id)
    return {...cdata,Price: p.Price}
  })
console.log(AddCartData);
  const TotelAmount = AddCartData.reduce((acc,v)=>acc+(v.Price*v.qty),0)

  const HandleAction = () => {
    console.log(PriceData);
    navigation.navigate('CheckOut',{total:TotelAmount,pdata:PriceData})
  }

  return (
    <ScrollView>
      <View>
        {
          AddCartData.map((v, i) => (
            <BagCard
              imgurl={{ uri: v.image }}
              color="white"
              size="L"
              price={parseInt(v.Price * v.qty)}
              contity={v.qty}
              Product={v.title}
              onPressP={() => handleinc(v.id)}
              onPressM={() => handledes(v.id)}
              onPressD={()=>handledelete(v.id)}
              key={i}
            />
          ))
        }


      </View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{
            width: horizontalScale(310), height: verticalScale(40), marginLeft: horizontalScale(20), marginTop: verticalScale(20), backgroundColor: "white", borderRadius: moderateScale(10), shadowOpacity: 0.10,
            shadowRadius: 30, elevation: 4
          }}
          placeholder="Enter Your Promo Code"
          keyboardType="numeric"
        />
        <TouchableOpacity style={{ width: horizontalScale(40), height: verticalScale(40), backgroundColor: 'black', borderRadius: moderateScale(100), marginTop: verticalScale(20), padding: 10 }}>
          <Feather name='arrow-right' size={moderateScale(20)} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginTop: verticalScale(30), marginLeft: horizontalScale(20), }}>
        <Text style={{ fontSize: moderateScale(15), marginTop: 5 }}>Total Amount:</Text>
        <Text style={{ fontSize: moderateScale(20), marginLeft: 210, color: 'green' }}>${TotelAmount}</Text>
      </View>
      <View style={{ marginTop: verticalScale(10) }}>
        <AppButton
          titel="CHECK OUT"
          onPress={() => HandleAction()}
        />
      </View>



    </ScrollView>
  )
}