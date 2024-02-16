import { View, Text } from 'react-native'
import React from 'react'
import AppInput from '../../component/InputBox/AppInput'
import AppButton from '../../component/Button/AppButton'
import { verticalScale } from '../../Constant/Metrics'

export default function Address({navigation}) {
  return (
    <View>
      <AppInput
        placeholder="Full Name"
        type="default"
      />
      <AppInput
        placeholder="Address"
        type="default"
      />
      <AppInput
        placeholder="City"
        type="default"
      />
      <AppInput
        placeholder="State/Province/Region"
        type="default"
      />
      <AppInput
        placeholder="Zip Code(Postel Code)"
        type="numeric"
      />
      <AppInput
        placeholder="Contry"
        type="default"
      />
      <View style={{marginTop:verticalScale(40)}}>
        <AppButton
          titel="SAVE ADDRESS"
          onPress={()=>navigation.navigate('Payment')}
        />
      </View>

    </View>
  )
}