import { View, Text, StyleSheet, FlatList } from 'react-native'
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

    const renderItem = ({ item }) => (
        <View>
            <View style={style.tableRow}>
                <Text >{item.bpi.USD.code}</Text>
                <Text style={style.tableHeader}>{item.bpi.USD.rate}</Text>
                <Text style={style.tableHeader}>{item.bpi.USD.symbol}</Text>
                <Text style={style.tabledis}>{item.bpi.USD.description}</Text>
            </View>
            <View style={style.tableRow}>
                <Text >{item.bpi.GBP.code}</Text>
                <Text style={style.tableHeader}>{item.bpi.GBP.rate}</Text>
                <Text style={style.tableHeader}>{item.bpi.GBP.symbol}</Text>
                <Text style={style.tabledis}>{item.bpi.GBP.description}</Text>
            </View>
            <View style={style.tableRow}>
                <Text>{item.bpi.EUR.code}</Text>
                <Text style={style.tableHeader}>{item.bpi.EUR.rate}</Text>
                <Text style={style.tableHeader}>{item.bpi.EUR.symbol}</Text>
                <Text style={style.tabledis}>{item.bpi.EUR.description}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={fdata}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            ListHeaderComponent={() => (
                <View style={style.des}>
                  
                </View>
            )}
        />
    )
}

const style = StyleSheet.create({
    des: {
        marginTop: 10,
    },
    tableRow: {
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 10
    },
    tabledis: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    tableHeader: {
        fontWeight: 'bold',
        marginLeft: 40
    },
});
