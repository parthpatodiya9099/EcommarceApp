import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { horizontalScale, moderateScale, verticalScale } from '../Constant/Metrics';
export default function Profileinput({name,titel,onPress}) {
  return (
    <View>
      <TouchableOpacity style={{width:"95%",height:verticalScale(70),backgroundColor:'white',marginLeft:horizontalScale(10),shadowOpacity: 0.25,shadowRadius: 20,elevation: 2,flexDirection:"row",marginTop:verticalScale(20)}} onPress={onPress}>
        <TouchableOpacity style={{padding:15,marginLeft:horizontalScale(5)}} >
            <Text style={{fontSize:moderateScale(20),color:'black'}}>{name}</Text>
            <Text style={{fontSize:moderateScale(15),color:'gray',marginTop:verticalScale(3)}}>{titel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:horizontalScale(180),marginTop:verticalScale(25)}}>
                <Feather name='chevron-right' color="black" size={moderateScale(20)} />
        </TouchableOpacity>         
      </TouchableOpacity>
    </View>
  )
}