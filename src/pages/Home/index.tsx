import { Box, Container } from "@mui/material";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

export function Home() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "#aaa",
          padding: "0 !important",
        }}
      >
        <Container
          maxWidth={"md"}
          sx={{ bgcolor: "#fff", padding: "0 !important" }}
        >
          <Header />
          <Main />
        </Container>
      </Box>
    </>
  );
}
