import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Task() {
    const [fdata, setData] = useState([]);
    useEffect(() => {
        getdata()
    }, [])
    const getdata = () => {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                setData([response.data])
            })
            .catch(error => {
                console.log(error);
            })


    }
    return (
        <View>
            {
                fdata.map((v, i) => {
                    console.log(v.bpi, 'lllllllllllllllllllll');
                    return (
                        <ScrollView key={i} style={{flexDirection:'row'}}>
                            <View style={style.des}>
                            <Text style={{fontSize:20,color:'black'}}>{v.bpi.USD.code}</Text>
                            <Text>{v.bpi.USD.symbol}</Text>
                            <Text>{v.bpi.USD.rate}</Text>
                            <Text>{v.bpi.USD.description}</Text>
                            <Text>{v.bpi.USD.rate_float}</Text>
                            </View>
                            <View  style={style.des}>
                            <Text style={{fontSize:20,color:'black'}}>{v.bpi.GBP.code}</Text>
                            <Text>{v.bpi.GBP.symbol}</Text>
                            <Text>{v.bpi.GBP.rate}</Text>
                            <Text>{v.bpi.GBP.description}</Text>
                            <Text>{v.bpi.GBP.rate_float}</Text>
                            </View>
                            <View  style={style.des}>
                            <Text style={{fontSize:20,color:'black'}}>{v.bpi.EUR.code}</Text>
                            <Text>{v.bpi.EUR.symbol}</Text>
                            <Text>{v.bpi.EUR.rate}</Text>
                            <Text>{v.bpi.EUR.description}</Text>
                            <Text>{v.bpi.EUR.rate_float}</Text>
                            </View>
                        </ScrollView>
                    )
                })
            }
        </View>
    )
}
const style = StyleSheet.create({
    des:{
        marginLeft:10
    }
})