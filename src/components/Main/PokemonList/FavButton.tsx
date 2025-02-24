import { Favorite } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";

import { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleFavorite } from "../../../redux/modules/favoritesSlice";

interface FavButtonProps {
  name: string;
  url: string;
}

export function FavButton({ name, url }: FavButtonProps) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorite);

  const currentPokemon = { name, url };

  const isOnFavList = favorites.some((fav) => fav.name === name);

  const handleToggleFavPokemon = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(toggleFavorite(currentPokemon));
  };

  const colorOnTheme =
    theme.palette.mode === "light" ? "#ffffffc0" : "#000000ac";

  return (
    <IconButton
      sx={{
        zIndex: 1,
        padding: 0,
        scale: 1.7,
        position: "absolute",
        top: "18px",
        right: "25px",
      }}
      onClick={handleToggleFavPokemon}
    >
      {isOnFavList ? (
        <Favorite color="primary" />
      ) : (
        <Favorite sx={{ color: colorOnTheme }} />
      )}
    </IconButton>
  );
}
