import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

const CartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addtoCart: (state, action) => {
            const itemAvelable = state.cart.findIndex((v) => v.id == action.payload)

            if (itemAvelable == -1) {
                state.cart.push({ id: action.payload, qty: 1 })
            } else {
                state.cart[itemAvelable].qty++
            }
        },
        increment: (state, action) => {
            const itemAvelable = state.cart.findIndex((v) => v.id == action.payload)
            state.cart[itemAvelable].qty++;
        },
        decrement: (state, action) => {
            const itemAvelable = state.cart.findIndex((v) => v.id == action.payload)
            state.cart[itemAvelable].qty--;
        },
        removefromCart: (state, action) => {
            const itemAvelable = state.cart.findIndex((v) => v.id == action.payload)
            state.cart.splice(itemAvelable, 1)
        }
    },

})

export const { addtoCart, increment, decrement ,removefromCart} = CartSlice.actions
export default CartSlice.reducer;
