import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Card from '../../component/Card/Card'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'
import { useDispatch, useSelector } from 'react-redux'
import { getProductData } from '../../redux/slices/ProductSlice'
import { getCategoryData } from '../../redux/slices/CategorySlice'
import { getSubCategoryData } from '../../redux/slices/SubCategorySlice'


export default function Product({ navigation }) {
  const authdata = useSelector(state => state.auth)

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductData());
    dispatch(getCategoryData());
    dispatch(getSubCategoryData())
  }, []);

 
  const data = useSelector(state => state.product);

  const category = useSelector(state => state.category);


  const filterData =data.data.filter((v) => v.Discount > 10)

  const handlechack = () => {
    category.data.map((v)=>{
      if(v.id == '9QfztZ7ZVj6PusfpaP6t'){
        navigation.navigate('Shop',{Categoryid:'9QfztZ7ZVj6PusfpaP6t'});
      }
    })
  }
 
  const tempArr = [...data.data]

  tempArr.sort((a, b) => {
    return new Date(b.createAt) - new Date(a.createAt)
  }).splice(5)

  const handleviewnew = () => {
    tempArr.sort((a, b) => {
      return new Date(b.createAt) - new Date(a.createAt)
    })
    navigation.navigate('Shop',{NewData:tempArr})
  }
  const handleDiscount = () => {
    const DiscountData =data.data.filter((v) => v.Discount >= 1)
    navigation.navigate('Shop',{DiscountData:DiscountData})
  }
  return (
    <View style={style.containor}>
      <ScrollView>

        <View style={{ width: '100%', height: verticalScale(500) }}>
          <Image
            source={require('../../../assets/images/shot-stylish-young-woman-posing-sunglasses-against-white-background.jpg')}
            style={{ width: '100%', height: '100%' }}
          />
        </View>

        <View style={{ position: 'absolute', padding: 10, marginLeft: 220 }}>
          <Text style={{ color: 'black', marginTop: verticalScale(310), fontSize: moderateScale(50) }}>Women</Text>
          <Text style={{ color: 'black', fontSize: moderateScale(50) }}>Fashion</Text>
          <TouchableOpacity
            style={{ backgroundColor: '#DB3022', padding: 10, borderRadius: 20, marginTop: verticalScale(20) }}
            onPress={() => handlechack()}>
            <Text style={{ color: 'white', textAlign: 'center', }}>Check</Text>
          </TouchableOpacity>
        </View>

        <View style={{ position: 'relative', marginTop: verticalScale(12) }}>
          <Text style={style.text}>New</Text>
          <Text style={style.subhead}>You’ve never seen it before!</Text>
          <TouchableOpacity onPress={()=>handleviewnew()} style={{ position: 'absolute', color: 'black', marginLeft: horizontalScale(320), marginTop: verticalScale(35) }}><Text>View all</Text></TouchableOpacity>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {
            tempArr.map((v, i) => (
              <TouchableOpacity onPress={() => { navigation.navigate('ProductDetails') }} key={i}>
                <Card
                  imguri={{ uri: v.image }}
                  title={v.Brand}
                  mainTitle={v.title}
                  Dollar={v.Price}
                  discount='NEW'
                  icon=''
                  disColor='black'
                  onPress={() => { productid = v.id, navigation.navigate('ProductDetails',) }}
                />
              </TouchableOpacity>
            ))
          }
        </ScrollView>

        <View style={{ flex: 1, marginTop: verticalScale(30) }}>
          <Text style={style.text}>Sale</Text>
          <Text style={style.subhead}>Super Summer Sale</Text>
          <TouchableOpacity onPress={()=>handleDiscount()} style={{ position: 'absolute', color: 'black', marginLeft: horizontalScale(320), marginTop: verticalScale(35) }}><Text>View all</Text></TouchableOpacity>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {
            filterData.map((v, i) => (
              <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')} key={i}>
                <Card
                  imguri={{ uri: v.image }}
                  title={v.title}
                  mainTitle={v.Brand}
                  Dollar={v.Price}
                  icon={'%'}
                  discount={v.Discount}
                  disColor='#DB3022'
                  onPress={() => { productid = v.id, navigation.navigate('ProductDetails') }}
                />
              </TouchableOpacity>
            ))
          }

        </ScrollView>

        <View style={style.viewbox}>
          {
            category.data.map((v, i) => (
              <TouchableOpacity style={style[`categoryimg${i % 3 + 1}`]} onPress={() => navigation.navigate('Categories', { c_id: v.id })} key={i}>
                <Image
                  style={style.img}
                  source={{ uri: v.image }}
                />
                <Text style={style.fonttxt}>{v.category}</Text>
              </TouchableOpacity>
            ))
          }
        </View>

      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({

  text: {
    fontSize: moderateScale(30),
    color: 'black',
    fontWeight: 'bold',
    marginTop: verticalScale(30),
    marginHorizontal: 16
  },
  subhead: {
    color: '#9B9B9B',
    marginHorizontal: 16
  },
  saletxt: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginTop: verticalScale(30),
    marginHorizontal: 16
  },
  categoryimg1: {
    width: '100%',
    height: 350,
    backgroundColor: 'black',
    opacity: 0.5
  },
  categoryimg2: {
    width: '50%',
    height: 300,
    backgroundColor: 'black',
    opacity: 0.5
  },
  categoryimg3: {
    width: '50%',
    height: 300,
    backgroundColor: 'black',
    opacity: 0.5
  },

  img: {
    width: '100%',
    height: '100%'
  },
  viewbox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  fonttxt: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontWeight: '900',
    fontFamily: 'serif',
    backgroundColor: 'black',
    opacity: 1
  },
})