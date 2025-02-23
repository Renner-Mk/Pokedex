import axios from "axios";
import { FetchPokemons } from "../types/pokemon";
import { api } from "./api";

export async function fetchPokemons(limit: number, offset: number) {
  try {
    const response = (
      await api.get(`/pokemon/?limit=${limit}&offset=${offset}`)
    ).data as FetchPokemons;

    return response.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    throw new Error("Failed to fetch Pokemon list");
  }
}

export async function fetchPokemonData(url: string) {
  try {
    const response = await api.get(url);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    throw new Error("Failed to fetch Pokemon data");
  }
}
