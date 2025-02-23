import { Grid2 as Grid, useMediaQuery } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import { setTotalPages } from "../../../redux/modules/paginationSlice";
import { CardPokemon } from "./CardPokemon";

export function PokemonList() {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector((state) => state.pokemon);
  const pagination = useAppSelector((state) => state.pagination);
  const screen = useMediaQuery("(min-width:445px)");

  useEffect(() => {
    const totalPages = Math.ceil(
      pokemons.length === 0 ? 1 : pokemons.length / pagination.perPage
    );

    dispatch(setTotalPages(totalPages));
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "max-content",
        mt: 3,
      }}
    >
      {pokemons.slice(0, 24).map((pokemon) => (
        <Grid key={pokemon.name} size={{ md: 3, sm: 4, xs: screen ? 6 : 12 }}>
          <CardPokemon url={pokemon.url} />
        </Grid>
      ))}
    </Grid>
  );
}
