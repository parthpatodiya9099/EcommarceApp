import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function StarRating({rating,onRate }) {
    const handleRate = (newRating) => {
        if (typeof onRate === 'function') {
            onRate(newRating);
        }
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleRate(index)}
                        style={{ padding: 5 }}
                    >
                        <AntDesign
                            name={rating >= index ? 'star' : 'staro'}
                            size={30}
                            color={rating >= index ? 'gold' : 'gray'}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}