import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    error: null,
    data: []
}

export const getSubCategoryData = createAsyncThunk(
    'subcategory/get',
    async () => {
        let data = []
        try {
            await firestore()
                .collection('SubCategory')
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


const SubCategorySlice = createSlice({
    name: 'subcategory',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSubCategoryData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default SubCategorySlice.reducer;