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
          orderData.order && orderData.order.length > 0 ? (
            orderData.order.map((v) => {
              return v.order && v.order.length > 0 ? (
                v.order.map((v1,i) => {
                  return (
                    <Orderinput
                      key={i}
                      ordernumber={v1.orderId}
                      date={v1.orderDate}
                      Quantity={[v1.items].reduce((acc, items) => acc + items.qty, 0)}
                      Amount={v1.items.qty * v1.items.productprice}
                      onPress={() => navigation.navigate('Details', { orderId: v1.orderId })}
                    />
                  )

                })
              ) : null


            })
          ) : null
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