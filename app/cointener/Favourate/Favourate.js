import { View, Text, ScrollView } from 'react-native'
import FavouriteCard from '../../component/Card/FavouriteCard'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../../redux/slices/CartSlice'
import { addFavouratelist, removefromFavourate } from '../../redux/slices/FavourateSlice'

export default function Favourate({ navigation }) {
  const favourateData = useSelector(state => state.favourate)
  const productData = useSelector(state => state.product)

  const FilterData = productData.data.filter((v) => favourateData.favourate.includes(v.id))
 
  const dispatch = useDispatch()
  const handleaddcart = (id) => {
    dispatch(addtoCart(id))
  }
  const handleDelete = (id) => {
    dispatch(addFavouratelist(id))
  }

  return (
    <ScrollView>
      {
        FilterData.map((v,i) => (
          <FavouriteCard
            img={{uri:v.image}}
            color="White"
            Product={v.title}
            price={v.Price}
            size='M'
            onPress={() =>{navigation.navigate('Bag'),handleaddcart(v.id)}}
            key={i}
            onPressC={()=>handleDelete(v.id)}
          />
        ))
      }

    </ScrollView>
  )
}