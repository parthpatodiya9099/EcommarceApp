import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductStack } from './StackNevigation';
import MyBag from '../cointener/Cart/MyBag';
import MyProfile from '../cointener/Profile/MyProfile';
import ProductList from '../cointener/Home/ProductList';
import Feather from 'react-native-vector-icons/Feather';
import SignUp from '../cointener/SignUp';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../cointener/Login';
import Favourate from '../cointener/Favourate/Favourate';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const BottomTab = ({ navigation }) => {
  const auth = useSelector(state => state.auth)

  console.log(auth.user,'lllllllllllllllllllllllllllllllllllll');
  return (
    auth.user ?

      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Shop') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Bag') {
              iconName = 'shopping-bag';
            } else if (route.name === 'Favourate') {
              iconName = 'heart';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }
            return (
              <Feather name={iconName} color={color} size={25} />
            )

          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={ProductStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Shop" component={ProductList} />
        <Tab.Screen name="Bag" component={MyBag} />
        <Tab.Screen name="Favourate" component={Favourate} />
        <Tab.Screen name="Profile" component={MyProfile} options={{
          headerShown: false,
        }} />

      </Tab.Navigator>
      :

      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} options={{
          headerShown: false
        }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{
          headerShown: false
        }} />

      </Stack.Navigator>
  )
}