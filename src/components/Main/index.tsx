import { Container } from "@mui/material";
import { PokemonList } from "./PokemonList";
import { Pagination } from "./Pagination";

export function Main() {
  return (
    <Container component="main">
      <Pagination />

      <PokemonList />
    </Container>
  );
}
