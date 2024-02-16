import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function Productapi() {
  const [product,Setproduct] = useState([])
  useEffect(() => {
    displayData();
  }, [])
  const displayData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("something wetn wrong")
      })
      .then((data) => {
        Setproduct(data)
      })
      .catch((err) => console.log(err))
  }

    return (
      <ScrollView>
        <Text>Productapi</Text>
        {
         product.map((v,i)=>(
          <View key={i}>
            <View>
              <Image 
                source={{uri:v.image}}
                style={{width:30,height:30}}
              />
            </View>
            <Text>{v.title}</Text>
          </View>
         ))
        }
      </ScrollView>
    )
}