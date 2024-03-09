import { combineReducers } from "redux";
import CategorySlice from "./slices/CategorySlice";
import ProductSlice from "./slices/ProductSlice";
import SubCategorySlice from "./slices/SubCategorySlice";
import CartSlice, { decrement, increment } from "./slices/CartSlice";
import FavourateSlice from "./slices/FavourateSlice";
import authSlice, { addAddressData } from "./slices/authSlice";
import CheckOutSlice from "./slices/CheckOutSlice";


export const rootReducer = combineReducers({
    category : CategorySlice,
    product : ProductSlice,
    subCategory : SubCategorySlice,
    cart:CartSlice,
    inc:increment,
    dec:decrement,
    favourate:FavourateSlice,
    auth:authSlice,
    address:addAddressData,
    order:CheckOutSlice
}) 