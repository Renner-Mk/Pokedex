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
  | "Gen-IX";

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
  | "psychic";

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
  normal: "#9099a1",
};

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface FavButtonProps {
  name: string;
  url: string;
  havePadding: boolean;
}

export interface FetchPokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}

export interface CardPokemonProps {
  url: string;
}

export interface Pokemon {
  base_experience: number;
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  forms: NamedAPIResource[];
  location_area_encounters: string;
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface Ability {
  isHidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface PokemonSprites {
  other: {
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
  };
}

export interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface Filter {
  onlyFavorites: boolean;
}

export const filterArrayByAnother = (
  array1: NamedAPIResource[],
  array2: NamedAPIResource[]
): NamedAPIResource[] => {
  const namesInArray2 = new Set(array2.map((item) => item.name));

  const filteredArray = array1.filter((item) => namesInArray2.has(item.name));

  return filteredArray;
};
