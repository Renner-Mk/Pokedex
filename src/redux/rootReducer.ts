import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"; 

import  themeSlice  from "./modules/themeSlice";



const rootReducer = combineReducers({
    theme: themeSlice,
})

export const persistConfig  = persistReducer({
    key: 'students',
    storage
}, rootReducer)