import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function DetailsCard({product,qty,price,imgurl,onPress}) {
    return (
        <View>
            <TouchableOpacity style={style.mainbox} onPress={onPress}>
                <View style={style.imgbox}>
                    <Image 
                        source={imgurl}
                        style={{width:'100%',height:'100%',borderRadius:20}}
                    />
                </View>
                <View style={style.detaisbox}>
                    <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:25}}>Product : <Text style={{fontSize:16,color:'black'}}>{product}</Text></Text>
                    <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:15}}>Qty : <Text style={{fontSize:16,color:'gray'}}>{qty}</Text></Text>
                    <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:15}}>Price : <Text style={{fontSize:16,color:'green'}}>{price}</Text></Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    mainbox: {
        width: '90%',
        height: 170,
        backgroundColor: 'white',
        marginLeft: 20,
        shadowOpacity: 30,
        shadowRadius: 10,
        elevation: 6,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: 'row'
    },
    imgbox: {
        width: '40%',
        height: '100%',
        borderRadius: 20,
    },
    detaisbox: {
        width: '60%',
        height: '100%',
        borderRadius: 20,
    }
})