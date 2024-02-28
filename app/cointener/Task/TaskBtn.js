import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

export default function TaskBtn({title}) {
  return (
    <View>
     <View>
        <TouchableOpacity style={style.btn}>
            <Text style={style.txt}>{title}</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}
const style = StyleSheet.create({
    btn:{
        width:'90%',
        height:40,
        borderRadius:30,
        marginLeft:20,
        backgroundColor:'white',
    },
    txt:{
        textAlign:'center',
        marginTop:5,
        color:'black',
        fontSize:20,
    }
})