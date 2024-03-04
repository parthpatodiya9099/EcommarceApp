import { View, Text, StatusBar } from 'react-native'
import React from 'react'

export default function Request() {
  return (
    <View>
        <StatusBar
                backgroundColor='#dcdcdc'
                barStyle="dark-content"
            />
      <Text>Request</Text>
    </View>
  )
}