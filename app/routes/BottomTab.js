import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductStack } from './StackNevigation';
import MyBag from '../cointener/Cart/MyBag';
import MyProfile from '../cointener/Profile/MyProfile';
import Product from '../cointener/Home/Product';
import ProductList from '../cointener/Home/ProductList';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignUp from '../cointener/SignUp';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../cointener/Login';
import TaskScreen1 from '../cointener/Task/TaskScreen1';
import TaskScreen2 from '../cointener/Task/TaskScreen2';
import Request from '../cointener/Task/Request';
import More from '../cointener/Task/More';
import hader from '../cointener/Task/Search';
import HaderCom from '../cointener/Task/Search';
import Search from '../cointener/Task/Search';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const BottomTab = ({ navigation }) => {
  const auth = useSelector(state => state.auth)


  return (

    <Tab.Navigator
      screenOptions={({ route }) => (
        {
          headerShown:true,
          headerTitleAlign: 'center',
          tabBarLabelPosition: 'below-icon',
          tabBarStyle: {
            height: 60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarIcon: ({ color, iconName }) => {

            if (route.name === 'Home') {
              iconName = "home"
            } else if (route.name === 'Favorites') {
              iconName = "heart"
            } else if (route.name === 'Requests') {
              iconName = 'message-badge'
            } else if (route.name === 'More') {
              iconName = "settings"
            } else if (route.name === ' ') {
              iconName = "search"
            }


            if (route.name === 'Favorites') {
              return (
                color == 'black' ?
                  <View>
                    <View style={{ width: 25, height:3, backgroundColor: 'black' }}></View>
                    <View style={{marginTop:5}}><AntDesign name={iconName} color={color} size={25} /></View>
                  </View>
                  :
                  <AntDesign name={iconName} color={color} size={25} />
              );
            } else if (route.name === 'Home') {
              return(
                color == 'black' ?
                <View>
                  <View style={{ width: 25, height:3, backgroundColor: 'black' }}></View>
                  <View style={{marginTop:5}}><Ionicons name={iconName} color={color} size={25} /></View>
                </View>
                :
                  <Ionicons name={iconName} color={color} size={25} />
              )
             
            } else if (route.name === 'Requests') {
              return(
                color == 'black' ?
                <View>
                  <View style={{ width: 25, height:3, backgroundColor: 'black' }}></View>
                  <View style={{marginTop:5}}><MaterialCommunityIcons name={iconName} color={color} size={25} /></View>
                </View>
                :
                <MaterialCommunityIcons name={iconName} color={color} size={25} />
              )
             
            } else if (route.name === 'More') {
              return(
                color == 'black' ?
                <View>
                  <View style={{ width: 25, height:3, backgroundColor: 'black' }}></View>
                  <View style={{marginTop:5}}><Ionicons name={iconName} color={color} size={25} /></View>
                </View>
                :
                <Ionicons name={iconName} color={color} size={25} />
              )
            } else {
              return <Feather name={iconName} color={color} size={25} />;
            }



          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 18
          }
        }

      )}
    >
      <Tab.Screen name="Home" component={TaskScreen1}
        options={
          {
            headerShown: false,
          }
        }
      />

      <Tab.Screen name="Favorites" component={TaskScreen2}
        options={
          {
            headerShown: false,
          }
        }
      />
      <Tab.Screen name=" " component={Search}
        options={
          {
            headerShown: false,
            tabBarIconStyle: {
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'white',
              position: 'absolute',
              bottom: 30,
              shadowOpacity: 60,
              shadowRadius: 49,
              elevation: 2,

            },

          }
        }
      />
      <Tab.Screen name="Requests" component={Request}
        options={
          {
            headerStyle: {
              backgroundColor: '#dcdcdc',
              height: 50,
            }
          }
        }
      />
      <Tab.Screen name="More" component={More}
        options={
          {
            headerStyle: {
              backgroundColor: '#dcdcdc',
              height: 50,
            }
          }
        }
      />
    </Tab.Navigator >
  )
  // auth.user ?
  //   <Tab.Navigator
  //     screenOptions={({ route }) => ({
  //       headerTitleAlign: 'center',
  //       tabBarIcon: ({ color }) => {
  //         let iconName;

  //         if (route.name === 'Home') {
  //           iconName = 'home';
  //         } else if (route.name === 'Shop') {
  //           iconName = 'shopping-cart';
  //         } else if (route.name === 'Bag') {
  //           iconName = 'shopping-bag';
  //         } else if (route.name === 'Favourate') {
  //           iconName = 'heart';
  //         } else if (route.name === 'Profile') {
  //           iconName = 'user';
  //         }


  //         return (
  //           <Feather name={iconName} color={color} size={25} />
  //         )

  //       },
  //       tabBarActiveTintColor: 'tomato',
  //       tabBarInactiveTintColor: 'gray',
  //     })}>
  //     <Tab.Screen name="Home" component={ProductStack}
  //       options={{
  //         headerShown: false,
  //       }}
  //     />
  //     <Tab.Screen name="Shop" component={ProductList} />
  //     <Tab.Screen name="Bag" component={MyBag} />
  //     <Tab.Screen name="Favourate" component={Favourate} />
  //     <Tab.Screen name="Profile" component={MyProfile} options={{
  //       headerShown: false,
  //     }} />


  //   </Tab.Navigator>
  //   :
  //   <Stack.Navigator>
  //     <Stack.Screen name='SignUp' component={SignUp} options={{
  //       headerShown: false
  //     }} />
  //     <Stack.Screen name='login' component={Login} options={{
  //       headerShown: false
  //     }} />
  //   </Stack.Navigator>
  // )
}