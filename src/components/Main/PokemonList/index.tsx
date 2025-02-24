import { Grid2 as Grid, Typography, useMediaQuery } from "@mui/material";
import { CardPokemon } from "./CardPokemon";
import { useAppSelector } from "../../../redux/hooks";

export function PokemonList() {
  const pokemons = useAppSelector((state) => state.pokemon);
  const pagination = useAppSelector((state) => state.pagination);
  const screen = useMediaQuery("(min-width:445px)");

  if (pokemons.length === 0) {
    return (
      <Grid
        container
        spacing={2}
        sx={{
          height: "max-content",
          mt: 3,
        }}
      >
        <Typography>
          Não há pokemons favoritados, favorite os que você mais gosta!!
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "max-content",
        mt: 5,
        gap: `${screen ? "2" : "50px"}`,
      }}
    >
      {pokemons
        .slice(
          (pagination.currentPage - 1) * pagination.perPage,
          pagination.currentPage * pagination.perPage
        )
        .map((pokemon) => (
          <Grid
            key={pokemon.name}
            size={{ md: 3, sm: 4, xs: screen ? 6 : 12 }}
            sx={{
              height: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // gap: "25px",
            }}
          >
            <CardPokemon url={pokemon.url} />
          </Grid>
        ))}
    </Grid>
  );
}
