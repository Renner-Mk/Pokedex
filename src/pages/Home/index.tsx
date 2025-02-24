import { Box, Container, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { listPokemons } from "../../redux/modules/pokemonSlice";

export function Home() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const filter = useAppSelector((state) => state.filter);
  const favorites = useAppSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(listPokemons({ filter, favorites }));
  }, [dispatch, favorites, filter]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "#aaa",
          position: "absolute",
        }}
      >
        <Container
          maxWidth={"md"}
          sx={{
            backgroundColor: theme.palette.background.default,
            padding: "0 !important",
            overflow: "hidden",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Header />
          <Main />
          {/* <Footer /> */}
        </Container>
      </Box>
    </>
  );
}
