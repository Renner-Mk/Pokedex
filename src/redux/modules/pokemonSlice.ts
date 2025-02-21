import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { featchPokemons } from "../../services/featchPokemon";
import { ApiResponse } from "../../types/pokemon";

const initialState: ApiResponse = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

export const featchPokemon = createAsyncThunk('pokemon/featchPokemons', async () => {
    //fazer o loading

    const result = await featchPokemons(8, 0)

    return result
})

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(featchPokemon.fulfilled, (_, action) => {
            return action.payload
        })
    }
})

export default pokemonSlice.reducer