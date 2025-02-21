export type Generations =
  | "All"
  | "Gen-I"
  | "Gen-II"
  | "Gen-III"
  | "Gen-IV"
  | "Gen-V"
  | "Gen-VI"
  | "Gen-VII"
  | "Gen-VIII"
  | "Gen-IX"

export type Type =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "psychic"

export const typeColor = {
  psychic: "#f9757a",
  ghost: "#5d52ac",
  flying: "#92aade",
  dark: "#5a5366",
  fairy: "#ec8fe6",
  dragon: "#096dc4",
  poison: "#ab6ac8",
  fighting: "#d3425f",
  steel: "#5a8ea1",
  ice: "#76d1c1",
  bug: "#95bd42",
  rock: "#c7b78b",
  ground: "#d97746",
  electric: "#f3d23b",
  water: "#539ddf",
  fire: "#ff9c54",
  grass: "#63bb5b",
  normal: "#9099a1"
}

export interface NamePokemonApi {
  name: string
  url: string
}

export interface ApiResponse {
  count: number,
  next: string | null
  previous: string | null
  results: NamePokemonApi[]
}