import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import AppButton from '../../component/Button/AppButton'
import { horizontalScale, verticalScale } from '../../Constant/Metrics'
import * as yup from 'yup';
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addAddressData, deleteAddressData, getauthdata } from '../../redux/slices/authSlice';
import AddressView from '../../component/InputBox/AddressView';

export default function Address({ navigation }) {
  const dispatch = useDispatch();
  const authdata = useSelector(state => state.auth)
  console.log(authdata.user);
  const AddAddresSchema = yup.object({
    fullname: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipcode: yup.string().required(),
    Country: yup.string().required(),
  })
  const formik = useFormik({
    initialValues: {
      fullname: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      Country: '',
    },
    validationSchema: AddAddresSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addAddressData({address:values , uid:authdata.user.uid}))
      resetForm()
    }
  })

  const { handleSubmit, handleBlur, handleChange, touched, errors, values } = formik
  const handleDelete = (data,id) => {
    console.log({data,id})
    dispatch(deleteAddressData({data,id}))
  }
  return (
    <ScrollView>
      <TextInput
        name='fullname'
        onChangeText={handleChange('fullname')}
        onBlur={handleBlur('fullname')}
        placeholder='Full-Name'
        style={style.inputbox}
        value={values.fullname}
      />

      <TextInput
        name='address'
        onChangeText={handleChange('address')}
        onBlur={handleBlur('address')}
        placeholder='Address'
        style={style.inputbox}
        value={values.address}
      />

      <TextInput
        name='city'
        onChangeText={handleChange('city')}
        onBlur={handleBlur('city')}
        placeholder='City'
        style={style.inputbox}
        value={values.city}
      />
      <TextInput
        name='state'
        onChangeText={handleChange('state')}
        onBlur={handleBlur('state')}
        placeholder='State'
        style={style.inputbox}
        value={values.state}
      />
      <TextInput
        name='zipcode'
        onChangeText={handleChange('zipcode')}
        onBlur={handleBlur('zipcode')}
        placeholder='zipcode'
        style={style.inputbox}
        value={values.zipcode}
      />
      <TextInput
        name='Country'
        onChangeText={handleChange('Country')}
        onBlur={handleBlur('Country')}
        placeholder='Country'
        style={style.inputbox}
        value={values.Country}
      />


      <View style={{ marginTop: verticalScale(40) }}>
        <AppButton
          titel="SAVE-ADDRESS"
          onPress={handleSubmit}
        />
      </View>
      <View>
        
          {
            authdata.user.address && authdata.user.address.map((v, i) => (
              <View key={i}>
                <AddressView 
                  name={v.fullname}
                  address={v.address}
                  city={v.city}
                  contry={v.Country}
                  zipcode={v.zipcode}
                  state={v.state}
                  onPressD={() => handleDelete(v)}
                />
              </View>
            ))
        }
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  inputbox: {
    width: '90%',
    height: verticalScale(60),
    backgroundColor: 'white',
    marginLeft: horizontalScale(20),
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 4,
    marginTop: verticalScale(30),
    borderRadius: 5,
    paddingLeft: horizontalScale(20)
  }
})