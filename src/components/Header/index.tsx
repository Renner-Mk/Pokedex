import { Box, Typography, useTheme } from "@mui/material";

import backgroundImage from "../../assets/Rayquaza.png";
import backgroundImage2 from "../../assets/pikachu.jpg";

import { ToggleThemeButton } from "./ToggleTheme";

export function Header() {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        borderRadius: "0 0 50px 50px",
        backgroundImage:
          theme.palette.mode === "light"
            ? `url(${backgroundImage2})`
            : `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        maxHeight: "max-content",
      }}
    >
      <Box
        sx={{
          marginBottom: "200px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "45px",
            width: "fit-content",
            backgroundColor: "#ffffff15",
            border: "2px solid #ffffff30",
            margin: "25px 0 0 20px",
            padding: "15px",
            backdropFilter: "blur(8px)",
          }}
        >
          Qual Pokemon <br />
          você procura?
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", top: 39, right: 25 }}>
        <ToggleThemeButton />
      </Box>
    </Box>
  );
}
