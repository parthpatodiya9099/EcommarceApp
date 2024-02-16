import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTab } from './BottomTab';
import Singup from '../cointener/SignUp';

const Drawer = createDrawerNavigator();
export const DrawerNevigation =()=> {    
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Feed" component={BottomTab} />
    <Drawer.Screen name='Singup' component={Singup}/>
  </Drawer.Navigator>
  )
}