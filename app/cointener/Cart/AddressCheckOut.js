import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RadioButton } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import AppButton from '../../component/Button/AppButton'

export default function AddressCheckOut({ navigation }) {

    const [selectValue, setSelectedValue] = useState(null)
    const authData = useSelector(state => state.auth)
    const uid = authData.user.uid
    const dispatch = useDispatch()
    const route = useRoute()

    const totel = route.params?.totel
    const pdata = route.params?.pdata

    const oid = Math.floor(Math.random() * 1000000)
    const handlechackout = (data) => {
        console.log(data);
        setSelectedValue(data);
    }
    return (
        <View>
            <RadioButton.Group
                onValueChange={(value) => setSelectedValue(value)}
                value={selectValue}>

            </RadioButton.Group>
            <ScrollView>
                {
                    authData.user.address.map((v, i) => {
                        return (
                            <View key={i} style={{ marginTop: 20, borderWidth: 1, borderRadius: 10, padding: 20, marginHorizontal: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton
                                        value={i}
                                        status={selectValue === i ? 'checked' : 'unchecked'}
                                        onPress={() => handlechackout({ i, v })}
                                        color='black'
                                    />
                                    <Text>Address {i + 1}</Text></View>

                                <Text>Name : {v.name}</Text>
                                <Text>Address : {v.address}</Text>
                                <Text>City : {v.city}</Text>
                                <Text>State : {v.state}</Text>
                                <Text>Country : {v.country}</Text>
                                <Text>Pincode : {v.pincode}</Text>
                            </View>
                        )

                    })
                }
                <View style={{marginTop:20}}>
                    <AppButton onPress={() => { navigation.navigate('Address') }}
                        titel={'Add-Address'}
                    />
                </View>


                <TouchableOpacity onPress={() => navigation.navigate('Success')} style={{
                    borderRadius: 20,
                    width: 100,
                    padding: 10,
                    marginHorizontal: 10,
                    backgroundColor: 'black',
                    marginTop: 15,
                    alignSelf: 'center',
                    marginBottom: 10
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const style = StyleSheet.create({

})