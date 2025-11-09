import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import blogSlice from "./blogSlice";
import authEcommerce from "./authEcommerce";
import orderSlice from "./orderSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
      auth:authSlice,
      blog:blogSlice,
      ecommerce:authEcommerce,
      orders:orderSlice,
      
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

 const store=configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export default store;
