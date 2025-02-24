import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemons } from "../../services/fetchPokemon";
import { Filter, NamedAPIResource } from "../../types/pokemon";
interface ListPokemonsArgs {
  filter: Filter;
  favorites: NamedAPIResource[];
}

export const listPokemons = createAsyncThunk(
  "pokemons/list",
  async ({ filter, favorites }: ListPokemonsArgs) => {
    const result = await fetchPokemons(filter, favorites);

    return result;
  }
);

const initialState: NamedAPIResource[] = [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listPokemons.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default pokemonSlice.reducer;
