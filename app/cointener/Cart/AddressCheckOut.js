import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RadioButton } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import AppButton from '../../component/Button/AppButton'
import { addOrderData } from '../../redux/slices/CheckOutSlice'

export default function AddressCheckOut({ navigation }) {

    const [selectValue, setSelectedValue] = useState(null)
    const authData = useSelector(state => state.auth)

    const uid = authData.user.uid
    const dispatch = useDispatch()
    const route = useRoute()

    const total = route.params?.total
    const pdata = route.params?.pdata
    console.log(pdata);
    let prodata;
    // pdata.map((v) => {
    //     console.log(v);
    //     prodata = {
    //         productId: v.id,
    //         productprice: v.Price,
    //         qty: v.qty,
    //     }
    // })


    const oid = Math.floor(Math.random() * 1000000)
    const handlechackout = (data) => {
        pdata.map((v) => {
            console.log(v);
            prodata = {
                productId: v.id,
                productprice: v.Price,
                qty: v.qty,
            }
            dispatch(addOrderData({
                ...data, uid: uid, pdata: prodata, total: total, orderId: oid
            }))
        })


        setSelectedValue(data);

        setTimeout(() => {
            navigation.navigate('Success')
        }, 2000);

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
                            <View style={{ width: '90%', height: 170, backgroundColor: 'white', marginLeft: 20, borderRadius: 20, borderWidth: 0.5, marginTop: 20 }} key={i}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <RadioButton
                                        value={i}
                                        status={selectValue === i ? 'checked' : 'unchecked'}
                                        onPress={() => handlechackout({ i, v })}
                                        color='black'
                                    />
                                    <Text style={{ fontSize: 20, color: 'black' }}>Address 1</Text>
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ marginTop: 5, color: 'black' }}>Name : <Text style={{ marginTop: 5, color: 'gray' }}>{v.fullname}</Text></Text>
                                    <Text style={{ marginTop: 5, color: 'black' }}>Address :<Text style={{ marginTop: 5, color: 'gray' }}>{v.address}</Text> </Text>
                                    <Text style={{ marginTop: 5, color: 'black' }}>City : <Text style={{ marginTop: 5, color: 'gray' }}> {v.city}</Text></Text>
                                    <Text style={{ marginTop: 5, color: 'black' }}>State : <Text style={{ marginTop: 5, color: 'gray' }}>{v.state}</Text></Text>
                                    <Text style={{ marginTop: 5, color: 'black' }}>Country :<Text style={{ marginTop: 5, color: 'gray' }}>{v.Country}</Text> </Text>
                                    <Text style={{ marginTop: 5, color: 'black' }}>Pincode : <Text style={{ marginTop: 5, color: 'gray' }}>{v.zipcode}</Text></Text>
                                </View>

                            </View>
                        )

                    })
                }
                <View style={{ marginTop: 20 }}>
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