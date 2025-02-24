import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";

import { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleFavorite } from "../../../redux/modules/favoritesSlice";

interface FavButtonProps {
  name: string;
  url: string;
  havePadding: boolean;
}

export function FavButton({ name, url, havePadding }: FavButtonProps) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorite);

  const currentPokemon = { name, url };

  const isOnFavList = favorites.some((fav) => fav.name === name);

  const handleToggleFavPokemon = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(toggleFavorite(currentPokemon));
  };

  const colorOnTheme = theme.palette.mode === "light" ? "white" : "black";

  return (
    <IconButton
      sx={{
        zIndex: 1,
        padding: havePadding ? "" : 0,
        scale: 1.5,
      }}
      onClick={handleToggleFavPokemon}
    >
      {isOnFavList ? (
        <Favorite color="primary" />
      ) : (
        <FavoriteBorder sx={{ color: colorOnTheme }} />
      )}
    </IconButton>
  );
}
