import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';
export default function BagCard({contity,imgurl,color,size,price,Product,onPressP,onPressM,onPressD}) {
    return (
        <View>

            <View style={style.bagbox}>
                <View style={style.imgbox}>
                    <Image
                        source={imgurl}
                        style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    />
                </View>
                <View style={style.disbox}>
                    <Text style={{ fontSize:moderateScale(22), marginTop:verticalScale(10), marginLeft:horizontalScale(10)}}>{Product}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize:moderateScale(15), marginTop:verticalScale(10), marginLeft: horizontalScale(10) }}>Color: <Text style={{ fontSize: moderateScale(16), color: 'black' }}>{color}</Text></Text>
                        <Text style={{ fontSize:moderateScale(15), marginTop:verticalScale(10), marginLeft: horizontalScale(10)  }}>Size:  <Text style={{ fontSize: moderateScale(16), color: 'black' }}>{size}</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={contity > 1 ? false : true} style={{ width:horizontalScale(40), height:verticalScale(40), borderRadius: 100, backgroundColor: 'white', padding: 10, marginTop:verticalScale(10), marginLeft: 12, borderRadius: moderateScale(40), shadowOpacity: 0.10, shadowRadius: 30, elevation: 9, }} onPress={onPressM}>
                            <Feather name="minus" size={moderateScale(20)} color="gray" />
                        </TouchableOpacity>
                        <Text style={{ fontSize:moderateScale(20), color: 'black', marginTop:verticalScale(20), marginLeft: horizontalScale(15) }}>{contity}</Text>
                        <TouchableOpacity style={{ width: horizontalScale(40), height:verticalScale(40), borderRadius:moderateScale(100), backgroundColor: 'white', padding: 10, marginTop:verticalScale(10), marginLeft:horizontalScale(12), borderRadius:moderateScale(40), shadowOpacity: 0.10, shadowRadius: 30, elevation: 9 }}  onPress={onPressP}>
                            <Feather name="plus" size={moderateScale(20)} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.iconbtn}>
                    <TouchableOpacity style={{ marginLeft: horizontalScale(8), marginTop:verticalScale(5)}} onPress={onPressD} >
                        <Feather name="x" size={moderateScale(25)} color="gray" />
                    </TouchableOpacity>

                    <Text style={{fontSize:moderateScale(20),color:"black",marginTop:verticalScale(50)}}>${price}</Text>
                </View>

            </View>

        </View>
    )
}
const style = StyleSheet.create({
    bagbox: {
        width: "90%",
        height: verticalScale(120),
        flexDirection: 'row',
        marginTop: verticalScale(20),
        marginLeft: horizontalScale(20),
        borderRadius: moderateScale(10),
        shadowOpacity: 0.10,
        shadowRadius: 30,
        backgroundColor: "white"

    },
    imgbox: {
        width: "30%",
        height: '100%',
        borderRadius: moderateScale(10)
    },
    disbox: {
        width: "55%",
        height: '100%',
    },
    iconbtn: {
        width: '25%',
        height: "100%",
    }
})