import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NamedAPIResource } from "../../types/pokemon";

const initialState: NamedAPIResource[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<NamedAPIResource>) {
      const index = state.findIndex((fav) => fav.name === action.payload.name);
      if (index !== -1) {
        return state.filter((fav) => fav.name !== action.payload.name);
      } else {
        return [...state, action.payload];
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
