import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet, TextInput, LogBox } from 'react-native'
import React, { useEffect, useState } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LikeCard from '../../component/Card/LikeCard';
import Card from '../../component/Card/Card';
import CategariCard from '../../component/Card/CategariCard';
import AppButton from '../../component/Button/AppButton';
import ProductCard from '../../component/ProductCard';
import { getProductData } from '../../redux/slices/ProductSlice';
import { getCategoryData } from '../../redux/slices/CategorySlice';
import { getSubCategoryData } from '../../redux/slices/SubCategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';


export default function ProductList({ navigation }) {

  const [model, Setmodel] = useState(false)
  const [search, Setsearch] = useState('')
  const [sort, setSort] = useState([])
  const [backgroundid, Setbackgroundid] = useState('')
  const [category, SetCategory] = useState('')

  const route = useRoute()
  const Categoryid = route.params?.Categoryid
  const fdataid = route.params?.fdataid;
  const Newdata = route.params?.Newdata;
  const discountData = route.params?.DiscountData
  const handlepress = () => {
    Setmodel(true)
  }
  const handleclose = () => {
    Setmodel(false)
  }

  let dispatch = useDispatch()

  const data = useSelector(state => state.product);
  const subCategorydata = useSelector(state => state.subCategory)

  let FilterData = subCategorydata.data.filter((v) => v.category == Categoryid);

  useEffect(() => {
    dispatch(getProductData());
    dispatch(getCategoryData());
    dispatch(getSubCategoryData());
  }, []);


  const searchSortData = () => {
    let fdata;

    if (category == 'all') {
      fdata = data.data.filter((v) => v.category == Categoryid)
    } else if (category) {
      fdata = data.data.filter((v) => v.SubCategory == category)
    } else if (fdataid) {
      fdata = data.data.filter((v) => v.SubCategory == fdataid)
    } else if (Newdata) {
      fdata = Newdata
    } else if (discountData) {
      fdata = discountData.sort((a,b)=>b.Discount - a.Discount)
    } else {
      fdata = data.data
    }

    fdata = fdata.filter((v) =>
      v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.Description.toLowerCase().includes(search.toLowerCase()) ||
      v.Price.toString().includes(search.toLowerCase())
    )

    fdata = fdata.sort((a, b) => {
      if (sort == 'hl') {
        return b.Price - a.Price
      } else if (sort == 'lh') {
        return a.Price - b.Price
      } else if (sort == 'AZ') {
        return a.title.localeCompare(b.title)
      } else if (sort == 'ZA') {
        return b.title.localeCompare(a.title)
      }
    })

    return fdata

  }
  const finalyData = searchSortData();


  return (
    <View>

      {/* category */}

      <View style={style.contener}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {
            FilterData == '' ? style.ok :
              <TouchableOpacity style={[
                style.categorybox,
                backgroundid === 'empty' ? { backgroundColor: 'gray' } : { backgroundColor: 'black' }
              ]} onPress={() => { SetCategory('all'), Setbackgroundid('empty') }}>
                <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', padding: 6 }}>All</Text>
              </TouchableOpacity>
          }

          {
            FilterData.map((v, i) => (
              <TouchableOpacity style={[
                style.categorybox,
                backgroundid === v.id ? { backgroundColor: 'gray' } : { backgroundColor: 'black' }
              ]} key={i} onPress={() => { SetCategory(v.id), Setbackgroundid(v.id) }}>
                <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', padding: 6 }}>{v.SubCategory}</Text>
              </TouchableOpacity>
            ))

          }

        </ScrollView>
      </View>

      {/* Filter */}

      <View style={style.filterbox}>
        <TouchableOpacity style={{ marginLeft: horizontalScale(15) }} onPress={() => (navigation.navigate('Filter'))}>
          <Feather name='filter' color='black' size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => (navigation.navigate('Filter'))}>
          <Text style={{ fontSize: moderateScale(18), marginLeft: verticalScale(7), marginTop: verticalScale(2), color: 'black' }}>Filters</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: horizontalScale(40), }} onPress={() => handlepress()}>
          <AntDesign name='swap' color='black' size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlepress()}>
          <Text style={{ fontSize: moderateScale(18), marginLeft: verticalScale(7), marginTop: verticalScale(2), color: 'black' }}>Price:High To Low</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: horizontalScale(50), flexShrink: 1 }}>
          <Feather name='list' color='black' size={25} />
        </TouchableOpacity>
      </View>

      {/* Searchbox */}

      <View>
        <TextInput
          placeholder='Search...'
          style={style.search}
          onChangeText={Setsearch}
          value={search}
        />
      </View>

      {/* ProductCard */}

      <ScrollView style={{ marginBottom: verticalScale(96), }}>
        <View style={style.productcardbox}>
          {
            discountData ? finalyData.map((v, i) => (             
              <ProductCard
                key={i}
                imgurl={{ uri: v.image }}
                title={v.title}
                price={v.Price}
                dis={v.Discount}
                backcolor={'red'}
                per={'%'}
                onPress={() => { productid = v.id, navigation.navigate('ProductDetails') }}
              />
           )) :
             finalyData.map((v, i) => (             
                <ProductCard
                  key={i}
                  imgurl={{ uri: v.image }}
                  title={v.title}
                  price={v.Price}
                  onPress={() => { productid = v.id, navigation.navigate('ProductDetails') }}
                />
             ))
          }

        </View>
      </ScrollView>

      {/* Modal */}

      <View>
        <Modal
          animationType='slide'
          transparent={true}
          visible={model}
        >
          <View style={style.modlestyle}>
            <TouchableOpacity style={style.closemodal} onPress={() => handleclose()}>
              <Feather name='minus' color={'black'} size={moderateScale(40)} />
            </TouchableOpacity>
            <Text style={style.titeltext}>Sort by</Text>

            <View style={style.sortboxmodal}>
              <TouchableOpacity style={{ width: '100%', height: verticalScale(55) }} onPress={() => Setmodel(false)}>
                <Text style={style.sortingtext}>Popular</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.sortingbox} onPress={() => { (setSort('AZ')), Setmodel(false) }}>
                <Text style={style.sortingtext}>A To Z</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.sortingbox} onPress={() => { (setSort('ZA')), Setmodel(false) }}>
                <Text style={style.sortingtext}>Z To A</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.sortingbox} onPress={() => { (setSort('lh')), Setmodel(false) }}>
                <Text style={style.sortingtext}>Price: lowest to high</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.sortingbox} onPress={() => { (setSort('hl')), Setmodel(false) }}>
                <Text style={style.sortingtext}>Price: highest to low</Text>
              </TouchableOpacity>
            </View>

          </View>
        </Modal>
      </View>

    </View>
  )
}

const style = StyleSheet.create({
  modlestyle: {
    width: '100%',
    height: verticalScale(450),
    backgroundColor: 'white',
    borderRadius: moderateScale(40),
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 9,
    marginTop: verticalScale(400)
  },
  search: {
    width: '89%',
    marginLeft: horizontalScale(20),
    borderBottomWidth: 0.5,
    color: 'black'
  },
  contener: {
    width: '100%',
    flexDirection: 'row',
    padding: 5
  },
  categorybox: {
    width: horizontalScale(110),
    height: verticalScale(35),
    backgroundColor: 'black',
    borderRadius: moderateScale(20),
    marginLeft: horizontalScale(10)
  },
  filterbox: {
    width: '100%',
    height: verticalScale(35),
    flexDirection: 'row',
    padding: 5,
  },
  productcardbox: {
    width: '90%',
    marginLeft: horizontalScale(15),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  closemodal: {
    width: horizontalScale(90),
    height: verticalScale(7),
    backgroundColor: 'gray',
    marginLeft: horizontalScale(140)
  },
  sortboxmodal: {
    width: '100%',
    height: '100%',
    marginTop: verticalScale(30),
  },
  sortingbox: {
    width: '100%',
    height: verticalScale(55),
    borderWidth: 0.5
  },
  sortingtext: {
    fontSize: moderateScale(22),
    marginTop: verticalScale(14),
    marginLeft: horizontalScale(20),
    color: 'black'
  },
  titeltext: {
    fontSize: moderateScale(20),
    color: 'black',
    marginLeft: horizontalScale(157),
    marginTop: verticalScale(15)
  }
})