import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'
import Brandtick from '../../component/Brandtick'
import SearchBar from 'react-native-search-bar';

export default function Filter() {
  return (
    <ScrollView>
      <View>


        <View style={{ width: '100%', height: verticalScale(30), marginLeft: horizontalScale(10), marginTop: verticalScale(10) }}><Text style={{ fontSize: moderateScale(22), color: 'black', }}>Price range</Text></View>
        <View style={{ width: '100%', height: verticalScale(90), backgroundColor: 'white', marginTop: verticalScale(10), shadowOpacity: 0.25, shadowRadius: 30, elevation: 9, }}>
        </View>

        <View style={{ width: '100%', height: verticalScale(30), marginLeft: horizontalScale(10), marginTop: verticalScale(10) }}><Text style={{ fontSize: moderateScale(22), color: 'black', }}>
          Color</Text></View>
        <View style={{ width: '100%', height: verticalScale(90), backgroundColor: 'white', marginTop: verticalScale(10), flexDirection: 'row', alignItems: 'center', shadowOpacity: 0.25, shadowRadius: 30, elevation: 9, }}>
          <TouchableOpacity style={{ width: horizontalScale(50), height: verticalScale(50), borderRadius: moderateScale(150), backgroundColor: 'black', marginLeft: horizontalScale(10) }}></TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(50), height: verticalScale(50), borderRadius: moderateScale(100), backgroundColor: '#B82222', marginLeft: horizontalScale(10) }}></TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(50), height: verticalScale(50), borderRadius: moderateScale(100), backgroundColor: 'green', marginLeft: horizontalScale(10) }}></TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(50), height: verticalScale(50), borderRadius: moderateScale(100), backgroundColor: '#E2BB8D', marginLeft: horizontalScale(10) }}></TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(50), height: verticalScale(50), borderRadius: moderateScale(100), backgroundColor: '#151867', marginLeft: horizontalScale(10) }}></TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(50), height: verticalScale(50), borderRadius: moderateScale(100), backgroundColor: '#BEA9A9', marginLeft: horizontalScale(10) }}></TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: verticalScale(30), marginLeft: horizontalScale(10), marginTop: verticalScale(10) }}><Text style={{ fontSize: moderateScale(22), color: 'black', }}>Size</Text></View>
        <View style={{ width: '100%', height: verticalScale(90), backgroundColor: 'white', marginTop: verticalScale(10), flexDirection: 'row', alignItems: 'center', shadowOpacity: 0.25, shadowRadius: 30, elevation: 9, }}>
          <TouchableOpacity style={{ width: horizontalScale(50), height: verticalScale(50), borderRadius: moderateScale(15), borderWidth: 0.5, marginLeft: horizontalScale(10), padding: 11 }}>
            <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'black' }}>XS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(50), height: verticalScale(50), borderRadius: moderateScale(15), borderWidth: 0.5, marginLeft: horizontalScale(10), padding: 11, backgroundColor: '#DB3022' }}>
            <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'white' }}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(50), height: verticalScale(50), borderRadius: moderateScale(15), borderWidth: 0.5, marginLeft: horizontalScale(10), padding: 11, backgroundColor: '#DB3022' }}>
            <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'white' }}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(50), height: verticalScale(50), borderRadius: moderateScale(15), borderWidth: 0.5, marginLeft: horizontalScale(10), padding: 11 }}>
            <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'black' }}>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(50), height: verticalScale(50), borderRadius: moderateScale(15), borderWidth: 0.5, marginLeft: horizontalScale(10), padding: 11 }}>
            <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'black' }}>XL</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: verticalScale(30), marginLeft: horizontalScale(10), marginTop: verticalScale(10) }}><Text style={{ fontSize: moderateScale(22), color: 'black', }}>Category</Text></View>
        <View style={{ width: '100%', height: verticalScale(140), backgroundColor: 'white', marginTop: verticalScale(10), shadowOpacity: 0.25, shadowRadius: 30, elevation: 9, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: verticalScale(20) }}>
            <TouchableOpacity style={{ width: horizontalScale(100), height: verticalScale(45), borderRadius: moderateScale(10), borderWidth: 0.5, padding: 9, backgroundColor: '#DB3022' }}>
              <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'white' }}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: horizontalScale(100), height: verticalScale(45), borderRadius: moderateScale(10), borderWidth: 0.5, padding: 9 }}>
              <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'black' }}>Women</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: horizontalScale(100), height: verticalScale(45), borderRadius: moderateScale(10), borderWidth: 0.5, padding: 9 }}>
              <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'black' }}>Men</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: verticalScale(10) }}>
            <TouchableOpacity style={{ width: horizontalScale(100), height: verticalScale(45), borderRadius: moderateScale(10), borderWidth: 0.5, padding: 9, marginLeft: horizontalScale(12) }}>
              <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'black' }}>Boys</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: horizontalScale(100), height: verticalScale(45), borderRadius: moderateScale(10), borderWidth: 0.5, padding: 9, marginLeft: horizontalScale(26) }}>
              <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'black' }}>Girls</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: '100%', height: verticalScale(30), marginLeft: horizontalScale(10), marginTop: verticalScale(10) }}><Text style={{ fontSize: moderateScale(22), color: 'black', }}>Brand</Text></View>

        <View>
          <View style={{ width: '90%', height: verticalScale(40), backgroundColor: 'white', shadowOpacity: 0.25, shadowRadius: 30, elevation: 4, marginLeft: horizontalScale(20), borderRadius: moderateScale(20), marginTop: verticalScale(15), marginBottom: verticalScale(15) }}>
            <SearchBar 
              placeholder='Search'
              style={{width:'100%',height:'100%', borderRadius: moderateScale(20)}}
            />
          </View>


          <Brandtick
            BrandName="Adidas"
          />
          <Brandtick
            BrandName="Adidas Originals"
          />
          <Brandtick
            BrandName="Blend"
          />
          <Brandtick
            BrandName="Boutique Moschino"
          />
          <Brandtick
            BrandName="Champion"
          />
          <Brandtick
            BrandName="Diesel"
          />
          <Brandtick
            BrandName="Jack & Jones"
          />
          <Brandtick
            BrandName="Naf Naf"
          />
          <Brandtick
            BrandName="Red Valentino"
          />
          <Brandtick
            BrandName="s.Oliver"
          />

          <View style={{ width: '100%', height: verticalScale(100), backgroundColor: 'white', shadowOpacity: 0.25, shadowRadius: 30, elevation: 9, flexDirection: 'row', justifyContent: 'space-around', paddingTop: verticalScale(20), marginTop: verticalScale(15) }}>

            <TouchableOpacity style={{ width: horizontalScale(150), height: verticalScale(45), borderRadius: moderateScale(25), borderWidth: 0.5, padding: 9 }}>
              <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'black' }}>Discard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: horizontalScale(150), height: verticalScale(45), borderRadius: moderateScale(25), borderWidth: 0.5, padding: 9, backgroundColor: '#DB3022' }}>
              <Text style={{ fontSize: moderateScale(20), textAlign: 'center', color: 'white' }}>Apply</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </ScrollView>
  )
}