import firestore, { firebase } from "@react-native-firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    error: null,
    order: []
}

export const getOrderData = createAsyncThunk(
    'order/get',
    async () => {
        let data = []
        try {
            await firestore()
                .collection('order')
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
export const addOrderData = createAsyncThunk(
    'order/addOrder',
    async (data) => {
        const documentSnapshot = await firestore()
            .collection('order')
            .doc(data.uid)
            .get()
        if (documentSnapshot.exists) {
            await firestore()
                .collection('order')
                .doc(data.uid)
                .update({
                    order: firebase.firestore.FieldValue.arrayUnion({
                        userID: data.uid,
                        items: data.pdata,
                        address: data.v,
                        totalAmount: data.total,
                        states: 'panding',
                        orderDate: new Date().toLocaleDateString(),
                        orderId: data.orderId
                    })
                })
                .then(() => {
                    console.log("Order successfully Deleted!");
                })
            return { ...data }
        } else {
            await firestore()
                .collection('order')
                .doc(data.uid)
                .set({
                    order: [
                        {
                            userID: data.uid,
                            items: data.pdata,
                            address: data.v,
                            totalAmount: data.total,
                            states: 'panding',
                            orderDate: new Date().toLocaleDateString(),
                            orderId: data.orderId
                        }
                    ]
                })
                .then(() => {
                    console.log("New Order added!");
                })

            return data;
        }
    }

)


const CheckoutSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrderData.fulfilled, (state, action) => {
            state.order = action.payload
        })
        builder.addCase(addOrderData.fulfilled, (state, action) => {
            state.order.push(action.payload)
        })

    }
})
export default CheckoutSlice.reducer;