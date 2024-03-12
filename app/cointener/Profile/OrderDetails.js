import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import DetailsCard from '../../component/DetailsCard'
import { getOrderData } from '../../redux/slices/CheckOutSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { getProductData } from '../../redux/slices/ProductSlice'

export default function OrderDetails({ navigation }) {
    const route = useRoute()
    const orderId = route.params?.orderId

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrderData())
        dispatch(getProductData())
    }, [])
    const productdata = useSelector(state => state.product)
    const orderData = useSelector(state => state.order)

    let Address
    let totalAmount
    let filterdata

    return (
        <View style={style.mainScreen}>
            <View>
                <ScrollView style={style.screelView}>
                    {
                        orderData.order.map((v) => {
                            return v.order.map((v1) => {
                                Address = v1.address;
                                totalAmount = v1.totalAmount;
                                return v1.items.map((v2) => {
                                    filterdata = productdata.data.filter((p) => p.id == v2.id)
                                    return filterdata.map((d, i) => {
                                        return (
                                            <DetailsCard
                                                key={i}
                                                imgurl={{ uri: d.image }}
                                                product={d.title}
                                                qty={v2.qty}
                                                price={v2.Price * v2.qty}
                                            // onPress={()=>navigation.navigate('ProductDetails')}
                                            />
                                        )
                                    })
                                })
                            })
                        })
                    }
                </ScrollView>
            </View>
            <View style={style.totalbox}>
                <Text style={style.toteltxt}>TotalAmount : <Text style={{ color: 'green' }}>{totalAmount}</Text></Text>
            </View>
            <View style={style.address}>
                <Text style={style.addresstxt}>Address : <Text style={{ color: 'gray' }}>{Address.address}</Text></Text>
            </View>

        </View>
    )
}
const style = StyleSheet.create({
    mainScreen: {
        width: '100%',
        height: '100%',
    },
    screelView: {
        width: '100%',
        height: 500,
    },
    totalbox: {
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        shadowOpacity: 20,
        elevation: 6,
        shadowRadius: 10,
        marginLeft: 20,
        borderRadius: 10
    },
    toteltxt: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        marginTop: 3
    },
    address: {
        width: '90%',
        height: 70,
        backgroundColor: 'white',
        shadowOpacity: 20,
        elevation: 6,
        shadowRadius: 10,
        marginTop: 30,
        marginLeft: 20,
        borderRadius: 10,
        padding: 20
    },
    addresstxt: {
        color: 'black',
        fontSize: 16
    }
})