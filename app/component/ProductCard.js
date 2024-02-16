import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../Constant/Metrics'
import Feather from 'react-native-vector-icons/Feather';

export default function ProductCard({ imgurl, title, price, onPress,dis,backcolor,per }) {
    return (
        <View>
            <View style={{ margin: 5 }}>
                <TouchableOpacity style={style.imgbox} onPress={onPress}>
                    <Image
                        source={imgurl}
                        style={style.img}
                    />
                    <View style={{
                        backgroundColor:backcolor, width: 25, height: 12, position: 'absolute', borderRadius: 10, marginLeft: 2, marginTop: 2
                    }}><Text style={{fontSize:10,color:'white',textAlign:'center'}}>{dis}{per}</Text></View>
                </TouchableOpacity>
                <View style={style.starbox}>
                    <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
                    <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
                    <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
                    <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
                    <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
                    <Text>(10)</Text>
                </View>
                <View style={{ width: horizontalScale(150) }}>
                    <Text style={{ fontSize: 19, color: 'black' }}>{title}</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>${price}</Text>
                </View>

            </View>

        </View>
    )
}

const style = StyleSheet.create({
    dis: {
        backgroundColor: 'red',
        width: 20,
        height: 10,
        position: 'absolute',
        borderRadius: 15,
        marginLeft: 2,
        marginTop: 2
    },
    imgbox: {
        width: horizontalScale(150),
        height: verticalScale(200),
        borderWidth: 0.5,
        borderRadius: moderateScale(10),
        marginTop: verticalScale(10)
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: moderateScale(10)
    },
    starbox: {
        flexDirection: 'row',
        marginTop: verticalScale(5)
    }
})