import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Orderinput from '../../component/Orderinput'
import Feather from 'react-native-vector-icons/Feather';
import Slider from 'react-native-slider';
import { verticalScale } from '../../Constant/Metrics';

export default function MyOrder({ navigation }) {
  // const handleBack = () => {
  //   navigation.goBack();
  // }
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
        <View style={{ paddingBottom: verticalScale(60) }}>

          <Orderinput
            ordernumber="91457387"
            date="11/02/2022"
            TNumber="IW4553256776"
            Quantity="3"
            Amount="$122"
          />
          <Orderinput
            ordernumber="78649086"
            date="11/02/2022"
            TNumber="IW4553256887"
            Quantity="2"
            Amount="$120"
          />
          <Orderinput
            ordernumber="9764377"
            date="11/02/2022"
            TNumber="IW4553256789"
            Quantity="3"
            Amount="$115"
          />
          <Orderinput
            ordernumber="9764377"
            date="11/02/2022"
            TNumber="IW4553256789"
            Quantity="3"
            Amount="$115"
          />
          <Orderinput
            ordernumber="9764377"
            date="11/02/2022"
            TNumber="IW4553256789"
            Quantity="3"
            Amount="$115"
          />
          <Orderinput
            ordernumber="9764377"
            date="11/02/2022"
            TNumber="IW4553256789"
            Quantity="3"
            Amount="$115"
          />
          <Orderinput
            ordernumber="9764377"
            date="11/02/2022"
            TNumber="IW4553256789"
            Quantity="3"
            Amount="$115"
          />
        </View>
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