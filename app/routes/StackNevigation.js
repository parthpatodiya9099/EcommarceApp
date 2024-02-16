import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../cointener/Home/ProductDetails';
import MyBag from '../cointener/Cart/MyBag';
import Address from '../cointener/Cart/Address';
import Payment from '../cointener/Cart/Payment';
import Success from '../cointener/Cart/Success';
import Product from '../cointener/Home/Product';
import ProductList from '../cointener/Home/ProductList';
import Categories from '../cointener/Home/Categories';
import Favourate from '../cointener/Favourate/Favourate';
import MyProfile from '../cointener/Profile/MyProfile';
import Filter from '../cointener/Home/Filter';
import MyOrder from '../cointener/Profile/MyOrder';
import ShippingInfo from '../cointener/Details/ShippingInfo';
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import SignUp from '../cointener/SignUp';
import Login from '../cointener/Login';
import Password from '../cointener/Password';



const Stack = createNativeStackNavigator();

export const ProductStack = ({ navigation }) => {

    const CustomButton = ({ icon, onclick }) => {
        return (
            <TouchableOpacity onPress={onclick}>
                <Feather name={icon} size={30} color='black' />
            </TouchableOpacity>
        )
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerBackVisible: false,
                headerLeft: () => {
                    return (
                        <CustomButton
                            icon='chevron-left'
                            onclick={() => { navigation.goBack() }}
                        />
                    )

                }
            }}
        >
            <Stack.Screen name='Product' component={Product} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen name='ProductList' component={ProductList} />
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='ProductDetails' component={ProductDetails} />
            <Stack.Screen name='Bag' component={MyBag} />
            <Stack.Screen name='Favourate' component={Favourate} />
            <Stack.Screen name='Profile' component={MyProfile} />
            <Stack.Screen name='Payment' component={Payment} />
            <Stack.Screen name='Address' component={Address} />
            <Stack.Screen name='Success' component={Success}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='Filter' component={Filter} />
            <Stack.Screen name='MyOrder' component={MyOrder}/>
            <Stack.Screen name='Info' component={ShippingInfo} />
            <Stack.Screen name='SignUp' component={SignUp}  options={{
                    headerShown: false
                }} />
            <Stack.Screen name='login' component={Login}  options={{
                    headerShown: false
                }}/>
            <Stack.Screen name='Password' component={Password} options={{
                    headerShown: false
                }} />



        </Stack.Navigator>

        
    )
}   

const HomeStack = () => {
    return(
        <Stack.Navigator>

        </Stack.Navigator>
    )
}
const ShopStack = () => {
    return(
        <Stack.Navigator>

        </Stack.Navigator>
    )
}
const FavourateStack = () => {
    return(
        <Stack.Navigator>
             <Stack.Screen name='Favourate' component={Favourate} />
        </Stack.Navigator>
    )
}
const ProfileStack = () => {
    return(
        <Stack.Navigator>
            
        </Stack.Navigator>
    )
}
const BagStack = () => {
    return(
        <Stack.Navigator>
            
        </Stack.Navigator>
    )
}

export {HomeStack,ShopStack,FavourateStack,ProfileStack,BagStack}