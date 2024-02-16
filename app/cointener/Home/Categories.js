import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, version } from 'react'
import AppButton from '../../component/Button/AppButton'
import { horizontalScale, verticalScale } from '../../Constant/Metrics'
import CategoriesName from '../../component/CategoriesName'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryData } from '../../redux/slices/CategorySlice'
import { useRoute } from '@react-navigation/native'

export default function Categories({ navigation }) {

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoryData())
  }, [])

  const route = useRoute()

  const Categoryid = route.params?.c_id

  const data = useSelector(state => state.subCategory)
  const FilterData = data.data.filter((v) => v.category == Categoryid)

  return (
    <ScrollView>
      <View style={{ marginTop: verticalScale(20) }}>
        <AppButton
          titel="VIEW ALL ITEMS"
          onPress={() => navigation.navigate('ProductList')}
        />
      </View>
      <Text style={{ marginLeft: horizontalScale(20), marginTop: verticalScale(10), color: 'black' }}>Choose category</Text>
      <View style={{ marginTop: verticalScale(30) }}>
        {
          FilterData.map((v, i) => (
            <CategoriesName
              CategoriName={v.SubCategory}
              onPress={() =>navigation.navigate('ProductList', {fdataid:v.id, Categoryid:Categoryid}) }
              key={i}
            />
          ))
        }
      </View>
    </ScrollView>
  )
}