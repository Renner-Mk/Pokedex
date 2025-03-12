import axios from "axios";
import {
  FetchPokemons,
  Filter,
  filterArrayByAnother,
  NamedAPIResource,
} from "../types/pokemon";
import { api } from "./api";

export async function fetchPokemons(
  filter: Filter,
  favorites: NamedAPIResource[]
): Promise<NamedAPIResource[]> {
  try {
    const response = (await api.get(`/pokemon/?limit=${1025}&offset=${0}`))
      .data as FetchPokemons;

    if (filter.onlyFavorites) {
      const filteredByFavorites = filterArrayByAnother(
        response.results,
        favorites
      );

      return filteredByFavorites;
    }

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

export async function fetchPokemonSearch(url: string) {
  try {
    const response = await api.get(`/pokemon/${url}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    throw new Error("Failed to fetch Pokemon data");
  }
}
