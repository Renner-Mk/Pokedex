import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import themeSlice from "./modules/themeSlice";
import pokemonSlice from "./modules/pokemonSlice";
import paginationSlice from "./modules/paginationSlice";
import favoritesSlice from "./modules/favoritesSlice";
import filterSlice from "./modules/filterSlice";
import pokemonModalSlice from "./modules/pokemonModal";

const rootReducer = combineReducers({
  theme: themeSlice,
  pokemon: pokemonSlice,
  pagination: paginationSlice,
  favorite: favoritesSlice,
  filter: filterSlice,
  modal: pokemonModalSlice,
});

export const persistConfig = persistReducer(
  {
    key: "pokedex",
    storage,
  },
  rootReducer
);
