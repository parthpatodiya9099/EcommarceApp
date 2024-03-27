import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity, TextInput, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import DetailsCard from '../../component/DetailsCard'
import { getOrderData } from '../../redux/slices/CheckOutSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { getProductData } from '../../redux/slices/ProductSlice'
import AppButton from '../../component/Button/AppButton'
import StarRating from '../../component/StarRating'
import { ReviewSetdata } from '../../redux/slices/ReviewSlice'

export default function OrderDetails({ navigation }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrderData())
        dispatch(getProductData())
    }, [])

    const [modal, SetModal] = useState(false)
    const [modalData, SetModalData] = useState('')
    const [Rating, setRating] = useState(0);
    const [Review, Settextmes] = useState('')

    let imgurl = modalData.image
    let Product = modalData.product
    let productid = modalData.pid
    const route = useRoute()
    const orderId = route.params?.orderId
    const orderData = useSelector(state => state.order)
    const productdata = useSelector(state => state.product)
    let data
    orderData.order.map((v) => {
        data = v.order.filter((v1) => v1.orderId == orderId)
    })

    let Address
    let totalAmount
    let filterdata
    let uid

    const handleRating = (product, image, pid) => {
        SetModalData({ product, image, pid })
        const order = data[0];
        if (order.states === 'panding') {
            SetModal(true)
        } else if (order.states === 'Delievery') {
            Alert.alert('Pending Order :', 'You cannot review a pending order So Please Wait...')
        }
    }

    const handleRate = (newRating) => {
        setRating(newRating);
    };

    const handkeSubmit = (Rating, Review, productid, uid) => {
        dispatch(ReviewSetdata({ Rating, Review, productid, uid }))
        SetModal(false)
    }
  
    return (
        <View style={style.mainScreen}>
            <View>
                <ScrollView style={style.screelView}>
                    {
                        orderData.order?.map((v) => {
                            return v.order?.map((v1) => {
                                uid = v1.userID
                                Address = v1?.address;
                                totalAmount = v1.totalAmount;
                                return v1.items?.map((v2) => {
                                    filterdata = productdata.data?.filter((p) => p.id == v2.id)
                                    return filterdata?.map((d, i) => {
                                        return (
                                            <DetailsCard
                                                key={i}
                                                imgurl={{ uri: d.image }}
                                                product={d.title}
                                                qty={v2.qty}
                                                price={v2.Price * v2.qty}
                                                onPressReview={() => handleRating(d.title, d.image, v2.id)}
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
            {/* //Modal */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={modal}
            >
                <View style={style.modalmain}>
                    <View style={style.haderbox}>
                        <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'white', marginTop: 15, marginLeft: 10 }} onPress={() => SetModal(false)}>
                            <Text style={{ color: 'black', textAlign: 'center', marginTop: 1, fontSize: 25 }}>X</Text>
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 60, fontSize: 25, color: 'black', marginTop: 15 }}>FEEDBACK & REVIEW</Text>
                    </View>
                    <View style={style.box}>
                        <Text style={{ color: 'white', fontSize: 20, marginTop: 10 }}>Ecommarce - App</Text>
                        <Text style={{ color: 'white', fontSize: 17, marginTop: 10 }}>Hello User...</Text>
                        <Text style={{ color: 'white', fontSize: 14, marginTop: 10 }}>You've recently bought
                            <Text> {Product}</Text></Text>
                        <Text style={{ color: 'white', fontSize: 14, marginTop: 5 }}>Tell us about your exprience !</Text>

                        <View style={style.imgbox}>
                            <Image
                                source={{ uri: imgurl }}
                                style={{ width: '100%', height: '100%', borderRadius: 15 }}
                            />
                        </View>
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 70, fontSize: 17 }}>ProductName :- {Product} </Text>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 25, marginTop: 20 }}>Rate this Product </Text>

                    <View style={style.starbox}>
                        <StarRating rating={Rating} onRate={handleRate} />
                    </View>

                    <View style={{ width: '90%', borderBottomWidth: 0.5, paddingBottom: 10, marginLeft: 20 }}><Text style={{ marginTop: 10, color: 'black', fontSize: 20, fontWeight: '900' }}>Comments</Text></View>

                    <TextInput
                        placeholder='Messages....'
                        onChangeText={Settextmes}
                        value={Review}
                        style={{ width: '90%', borderWidth: 0.5, borderColor: 'gray', marginTop: 20, marginLeft: 20, }}
                    />
                    <View style={{ marginTop: 20 }}>
                        <AppButton
                            titel={'Submit Review'}
                            onPress={() => handkeSubmit(Rating, Review, productid, uid)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const style = StyleSheet.create({
    modalmain: {
        width: '100%',
        height: '100%',
    },
    box: {
        width: 250,
        height: 200,
        backgroundColor: '#DB3022',
        marginLeft: 70,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10
    },
    imgbox: {
        width: 100,
        height: 130,
        marginTop: 20,
        borderColor: 'white',
        borderWidth: 6,
        borderRadius: 20,
    },
    starbox: {
        width: '90%',
        height: 50,
        marginTop: 10,
        borderBottomWidth: 0.5,
        marginLeft: 20
    },
    haderbox: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowOpacity: 20,
        shadowRadius: 20,
        elevation: 4,
    },
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