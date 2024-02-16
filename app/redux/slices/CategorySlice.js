import firestore from '@react-native-firebase/firestore';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: []
}

export const getCategoryData = createAsyncThunk(
  'FormExam/get',
  async () => {
    let data = []
    try {
      await firestore()
        .collection('Category')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
            data.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data()
            })
          });
        });
      return data;
    } catch (error) {
      return error
    }
  }
)



const FormExamSlice = createSlice({
  name: 'FormExam',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getCategoryData.fulfilled, (state, action) => {
      state.data = action.payload
    })


  }
})


export default FormExamSlice.reducer;