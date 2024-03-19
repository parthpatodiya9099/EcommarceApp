import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RadioButton } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import AppButton from '../../component/Button/AppButton'
import { addOrderData } from '../../redux/slices/CheckOutSlice'
import { StripeProvider } from '@stripe/stripe-react-native';
import { getAddressData } from '../../redux/slices/authSlice'
import Payment from './Payment'

export default function AddressCheckOut({ navigation }) {
    const [selectValue, setSelectedValue] = useState(null)
    const [loder, setLoder] = useState(false)
    const [payment, Setpayment] = useState(false)
    useEffect(() => {
        dispatch(getAddressData())
    }, [])

    const authData = useSelector(state => state.auth)


    const uid = authData.user.uid
    const dispatch = useDispatch()
    const route = useRoute()

    const total = route.params?.total
    const pdata = route.params?.pdata


    const oid = Math.floor(Math.random() * 1000000)
    const handlechackout = (data) => {
        setLoder(true)
        console.log(data);
        dispatch(addOrderData({
            ...data, uid: uid, pdata: pdata, total: total, orderId: oid
        }))
        setSelectedValue(data);

        setTimeout(() => {
            Setpayment(true)
            setLoder(false)
        }, 2000);
    }
    return (
        <StripeProvider
            publishableKey="pk_test_51OtP3YSBROIrEDWRNFyKpUpLNazR0PcVPEHG5R1OfYKc66Q9KGjXYk8TlW9vTBvW2vTMRILWosYwx76LJmgLGTiB001rJ2T4Wp"
            urlScheme="your-url-scheme"
        >
            <View>
                <RadioButton.Group
                    onValueChange={(value) => setSelectedValue(value)}
                    value={selectValue}>

                </RadioButton.Group>
                {
                    loder ? <ActivityIndicator size="large" color="#DB3022" style={style.loder} /> : ''
                }
                <ScrollView>
                    {
                        authData.user.address && authData.user.address.map((v, i) => {
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
                    {
                        payment == false ?
                            <View style={{ marginTop: 20 }}>
                                <AppButton onPress={() => { navigation.navigate('Address') }}
                                    titel={'Add-Address'}
                                />
                            </View>
                        :
                            <TouchableOpacity style={{ marginTop: 20 }} >
                                <Payment />
                            </TouchableOpacity>
                    }
                </ScrollView>

            </View>
        </StripeProvider>
    )
}
const style = StyleSheet.create({
    loder: {

    }
})