import { Box, Typography } from "@mui/material";

export function Header() {
  return (
    <Box
      component="header"
      sx={{
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        height: "250px",
        bgcolor: "#ccc",
      }}
    >
      <Typography>titulo</Typography>
    </Box>
  );
}
