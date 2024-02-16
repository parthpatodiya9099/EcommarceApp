import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';

export default function FavouriteCard({img,color,Product,price,size,onPress,onPressC}) {
    return (
        <View>

            <View style={style.fevbox}>
                <View style={style.imgbox}>
                    <Image
                        source={img}
                        style={{ width: '100%', height: '100%',borderRadius:moderateScale(10) }}
                    />
                </View>
                <View style={style.detailsbox}>
                    <Text style={{ fontSize:moderateScale(18), marginLeft:horizontalScale(5), marginTop:verticalScale(15) }}>{Product}</Text>
                    {/* <Text style={{ fontSize:moderateScale(25), color: 'black', marginLeft: horizontalScale(5), marginTop: verticalScale(2) }}></Text> */}
                    <Text style={{ fontSize: moderateScale(15), marginLeft: 5, marginTop:verticalScale(22) }}>Color : <Text style={{ fontSize: 16, color: 'black' }}>{color}</Text></Text>
                    <Text style={{ fontSize: moderateScale(25), color: 'black', marginLeft:horizontalScale(5), marginTop:verticalScale(5) }}>{price}</Text>
                </View>
                <View style={style.rettingBox}>
                    <Text style={{ fontSize:moderateScale(20), marginLeft: horizontalScale(17), marginTop: verticalScale(74) }}>Size : <Text style={{ fontSize: moderateScale(20), color: 'black' }} >{size}</Text></Text>
                    <View style={{ flexDirection: 'row',marginLeft: horizontalScale(14),  marginTop: verticalScale(10)}}>
                        <Feather name='star' color='gold' size={moderateScale(16)}/>
                        <Feather name='star' color='gold' size={moderateScale(16)}/>
                        <Feather name='star' color='gold' size={moderateScale(16)}/>
                        <Feather name='star' color='gold' size={moderateScale(16)}/>
                        <Feather name='star' color='gold' size={moderateScale(16)}/>
                        <Text>(10)</Text>
                    </View>
                </View>
                <View style={style.iconbox}>
                    <TouchableOpacity style={{paddingLeft:horizontalScale(10)}} onPress={onPressC}>
                        <Feather name="x" size={moderateScale(25)} color="gray"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:horizontalScale(43),height:verticalScale(44),backgroundColor:'#DB3022',borderRadius:moderateScale(100),padding:13,marginTop:60,marginRight:5}} onPress={onPress}>
                        <Feather name="shopping-bag" size={moderateScale(17)} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const style = StyleSheet.create({
    fevbox: {
        width: "95%",
        height:verticalScale(130),
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: verticalScale(30),
        marginLeft: horizontalScale(10),
        borderRadius:moderateScale(10),
    },
    imgbox: {
        width: "30%",
        height: "100%",
    },
    detailsbox: {
        width: "25%",
        height: "100%",
    },
    rettingBox: {
        width: "35%",
        height: "100%",
    },
    iconbox: {
        width: "10%",
        height: "100%",
        paddingRight:horizontalScale(2)
    }
})