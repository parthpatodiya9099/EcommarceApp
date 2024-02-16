import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'

export default function Card({imguri, title, mainTitle, Dollar, discount, disColor,onPress,icon }) {
    return (
      
            <TouchableOpacity style={style.parentBox} onPress={onPress}>
                <View style={style.box}>
                    <Image
                        style={style.image1}
                        source={imguri}
                    />
                    <Pressable style={{ margin: 6, padding: 1, backgroundColor: disColor, width:horizontalScale(25), position: 'absolute', borderRadius:moderateScale(10)}}>
                        <Text style={{ fontSize: moderateScale(9), color: 'white', textAlign: 'center' }}>{discount}{icon}</Text>
                    </Pressable>

                </View>
                <View style={style.deatilBox}>
                    <Text style={style.title}>{title}</Text>
                    <Text style={style.mainTitle}>{mainTitle}</Text>
                    <Text style={style.Dollar}>$ {Dollar}</Text>
                </View>
            </TouchableOpacity>
    
    )
}

const style = StyleSheet.create({
    image1: {
        width: horizontalScale(140),
        height:verticalScale(180),
        borderRadius : moderateScale(8), 
        resizeMode: 'cover'
    },
    parentBox: {
        marginHorizontal: 16,
    },
    box: {
        width: horizontalScale(140),
        height:verticalScale(180),
        marginTop:verticalScale(24),
        borderRadius: moderateScale(6),
        backgroundColor: '#DADADA',
        position: 'relative',

    },
    deatilBox: {
        marginTop:verticalScale(10),
        color: 'black',
        width:horizontalScale(140),

    },
    title: {
        color: 'black',
        fontSize:moderateScale(10)
    },
    mainTitle: {
        color: 'black',
        fontSize:moderateScale(16)
    },
    Dollar: {
        color: 'black',
        fontSize: moderateScale(14),
        color: '#DB3022'
    }
})