import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    favourate: [],
    error: null
}

const FavourateSlice = createSlice({
    name: 'favourate',
    initialState: initialState,
    reducers: {
        addFavouratelist: (state, action) => {
            if (state.favourate.includes(action.payload)) {
                state.favourate.splice(state.favourate.indexOf(action.payload), 1)
            } else {
                state.favourate.push(action.payload)
            }
        },
    }
})

export const { addFavouratelist, removefromFavourate } = FavourateSlice.actions
export default FavourateSlice.reducer;
