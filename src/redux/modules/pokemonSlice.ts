import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemons } from "../../services/fetchPokemon";
import { NamedAPIResource } from "../../types/pokemon";

const initialState: NamedAPIResource[] = [];

export const listPokemon = createAsyncThunk(
  "pokemon/featchPokemons",
  async () => {
    const result = await fetchPokemons(1025, 0);

    return result;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(listPokemon.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default pokemonSlice.reducer;
