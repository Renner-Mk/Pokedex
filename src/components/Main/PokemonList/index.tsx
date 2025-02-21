import { Box, Card, CardContent, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { featchPokemon } from "../../../redux/modules/pokemonSlice";
import { useEffect } from "react";

export function PokemonList() {
  const dispatch = useAppDispatch();
  const { results } = useAppSelector((state) => state.pokemon);

  console.log(results);

  useEffect(() => {
    dispatch(featchPokemon());
  }, [dispatch]);

  return (
    <Box>
      {results.map((pokemon) => (
        <Card>
          <CardContent>
            <Typography>{pokemon.name}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
