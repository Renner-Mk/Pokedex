import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"; 

import  themeSlice  from "./modules/themeSlice";
import  pokemonSlice  from "./modules/pokemonSlice";
import  paginationSlice  from "./modules/paginationSlice";



const rootReducer = combineReducers({
    theme: themeSlice,
    pokemon: pokemonSlice,
    pagination: paginationSlice,
    

})

export const persistConfig  = persistReducer({
    key: 'students',
    storage
}, rootReducer)