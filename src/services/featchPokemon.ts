import { ApiResponse } from "../types/pokemon";
import { api } from "./api";

export async function featchPokemons(limit: number, offset: number){
    try {
        const response = await api.get(`/pokemon/?limit=${limit}&offset=${offset}`)

        return response.data

    } catch (error) {
        console.log(error);
        
    }
}

export async function featchPokemonId(): Promise<ApiResponse | undefined> {
    try {
        const response = await api.get(`/pokemon/?limit=${8}&offset=${0}`)

        return response.data

    } catch (error) {
        console.log(error);
        
    }
}