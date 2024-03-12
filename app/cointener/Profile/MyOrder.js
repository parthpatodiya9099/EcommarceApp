import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Slider from 'react-native-slider';
import { verticalScale } from '../../Constant/Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderData } from '../../redux/slices/CheckOutSlice';
import Orderinput from '../../component/Orderinput';

export default function MyOrder({ navigation }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrderData())
  }, [])

  const orderData = useSelector(state => state.order)
  let arr = []
  let qty
  orderData.order.map((v) => {
    v.order.map((v1) => {
      v1.items.map((v2) => {
        arr.push(v2.qty)
        qty = arr.reduce((acc, a) => acc + a, 0)
      })
    })
  })


  return (
    <View>

      <View style={{ width: "100%", height: 40, backgroundColor: 'white', padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ width: '30%', height: '90%', borderRadius: 15, backgroundColor: 'black', padding: 5, marginLeft: 10 }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Delivered</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '30%', height: '90%', borderRadius: 15, backgroundColor: 'white', padding: 5, marginLeft: 10 }}>
          <Text style={{ textAlign: 'center', color: 'black' }}>Processing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '30%', height: '90%', borderRadius: 15, backgroundColor: 'white', padding: 5, marginLeft: 10 }}>
          <Text style={{ textAlign: 'center', color: 'black' }}>Cancelled</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>

        {
          orderData.order.map((v) => {
            return v.order.map((v1) => {
              return (
                <Orderinput
                  ordernumber={v1.orderId}
                  date={v1.orderDate}
                  Amount={v1.totalAmount}
                  Quantity={qty}
                  onPress={() => navigation.navigate('Details', { orderId: v1.orderId })}
                />
              )
            })
          })
        }


      </ScrollView>
    </View>
  )
}




















{/* <View style={{ width: "100%", height: 50, backgroundColor: 'white', padding: 10, flexDirection: 'row' }}>
        <TouchableOpacity style={{ marginTop: 5 }} onPress={() => ('')}>
          <Feather name='chevron-left' size={25} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, marginTop: 5, marginLeft: 110, color: 'black' }}>My Orders</Text>
        <TouchableOpacity style={{ marginTop: 5, marginLeft: 124 }} onPress={() => ('')}>
          <Feather name='search' size={20} color="black" />
        </TouchableOpacity>
      </View> */}