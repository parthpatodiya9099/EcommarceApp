import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';


const initialState = {
    isLoading: false,
    error: null,
    data: []
}

export const getProductData = createAsyncThunk(
    'product/get',
    async () => {
        let data = []
        try {
            await firestore()
                .collection('Product')
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




const ProductSlice = createSlice({

    name: 'product',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductData.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.error = null
        })
    }
})

export default ProductSlice.reducer;