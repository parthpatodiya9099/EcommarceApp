import { thunk } from "redux-thunk";
import { rootReducer } from ".";
import { applyMiddleware, createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['cart','favourate','auth','order']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)