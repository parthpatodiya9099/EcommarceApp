import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    error: null,
    data: []
}

export const ReviewSetdata = createAsyncThunk(
    'review/set',
    async (data) => {
        console.log(data,'jjjjjjjjjjjjjjjjjjjjjjj');
        firestore()
            .collection('review')
            .add(data)
            .then(() => {
                console.log('review added!');
            });
        return data
    }
)
const ReviewSlice = createSlice({
    name: 'review',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(ReviewSetdata.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.error = null
        })
    }
})
export default ReviewSlice.reducer;