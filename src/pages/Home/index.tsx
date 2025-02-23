import { Box, Container, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { listPokemon } from "../../redux/modules/pokemonSlice";

export function Home() {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listPokemon());
  }, [dispatch]);

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
