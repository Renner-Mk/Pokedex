import { Autocomplete, TextField } from "@mui/material";
import { KeyboardEvent, useState } from "react";

import { openPokemonModal } from "../../../redux/modules/pokemonModal";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

export function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector((state) => state.pokemon);

  const handleSearch = (pokemonName: string) => {
    if (!pokemonName.trim()) return;
    dispatch(openPokemonModal(`/pokemon/${pokemonName}`));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const selected = pokemons.find(
        (pokemon) =>
          pokemon.name.toLowerCase() === inputValue.trim().toLowerCase()
      );
      if (selected) {
        handleSearch(selected.name);
      }
    }
  };

  return (
    <Autocomplete
      disablePortal
      options={pokemons}
      getOptionLabel={(option) => option.name}
      sx={{
        width: 300,
        alignSelf: "center",
        marginBottom: "20px",
        backgroundColor: (theme) => theme.palette.background.paper,
        borderRadius: (theme) => theme.shape.borderRadius,
        padding: 0,
        border: "none",
        outline: "none",
      }}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      onChange={(_, newValue) => {
        if (newValue) {
          handleSearch(newValue.name);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Pokémons"
          onKeyDown={handleKeyDown}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
      )}
    />
  );
}
