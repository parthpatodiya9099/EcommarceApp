import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native'
import AppButton from '../../component/Button/AppButton'
import { horizontalScale, verticalScale } from '../../Constant/Metrics'
import * as yup from 'yup';
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addAddressData, deleteAddressData, getAddressData, updateAddressData } from '../../redux/slices/authSlice';
import AddressView from '../../component/InputBox/AddressView';
import { useEffect, useState } from 'react';

export default function Address({ navigation }) {

  const [update,Setupdate] = useState(false)
  const [oldData,SetOldData] = useState(null)

  const dispatch = useDispatch();
  const authdata = useSelector(state => state.auth)
  const [model, Setmodel] = useState(false)
  const handleAddAddress = () => {
    Setmodel(true)
  }
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
       return values
    }
    
  })
  const handleSubmit = (values) => {
    console.log(values);
    if(update){
      console.log("user updateddddddddd");
      dispatch(updateAddressData({address:values,oldData,uid:authdata.user.uid}))
    }else{
      dispatch(addAddressData({address: values, uid:authdata.user.uid}))
    }
    Setmodel(false)
      Setupdate(false)
  }
  useEffect(()=>{
    dispatch(getAddressData())
  },[])

  const {  handleBlur, handleChange, touched, errors, values,setValues } = formik

  const handleDelete = (data, uid) => {
    Alert.alert('Delete', 'You really want to Delete ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      { text: 'Delete', onPress:()=>dispatch(deleteAddressData({ data, uid }))},
    ]);
    
  }
  const handleupdate = (data) => {
    console.log(data);
    setValues(data)
    SetOldData(data)
    Setupdate(true)
    Setmodel(true)

  }
  return (
    <View style={style.mainbox}>
      <View style={{ marginTop: 20 }}>
        <AppButton
          titel={'Add Address'}
          onPress={() => handleAddAddress()}
        />
      </View>
      {/* //Model */}
      <View>
        <Modal
          animationType='slide'
          transparent={true}
          visible={model}
        >
          <View style={style.modle}>
            <TouchableOpacity onPress={() => Setmodel(false)}>
              <Text style={style.close}>X</Text>
            </TouchableOpacity>
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
                onPress={()=>handleSubmit(values)}
              />
            </View>

          </View>
        </Modal>
      </View>

      <ScrollView style={style.scrool}>

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
                onPressD={() => handleDelete(v, authdata.user.uid)}
                onPressE={()=>handleupdate(v)}
              />
            </View>
          ))
        }
      </ScrollView>

    </View>
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
  },
  modle: {
    width: '100%',
    height: '90%',
    marginTop: 110,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 0.5
  },
  close: {
    fontSize: 20,
    color: 'black',
    marginLeft: 350,
    marginTop: 10
  },
  mainbox: {
    marginBottom: 58,
  },
  scrool: {
    marginTop: 15
  }
})