import { createSlice } from "@reduxjs/toolkit";
import { Filter } from "../../types/pokemon";

const initialState: Filter = {
  onlyFavorites: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleOnlyFavorites(state) {
      return { ...state, onlyFavorites: !state.onlyFavorites };
    },
  },
});

export const { toggleOnlyFavorites } = filterSlice.actions;
export default filterSlice.reducer;
