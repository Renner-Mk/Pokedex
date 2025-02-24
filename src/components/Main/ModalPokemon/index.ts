// import React from "react";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   InputBase,
//   IconButton,
//   SvgIcon,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";

// export function Main({ toggleTheme, isDarkMode }) {
//   const HeaderContainer = styled(Box)(({ theme }) => ({
//     position: "relative",
//     background: "linear-gradient(90deg, #ffcc00, #ff3300)",
//     overflow: "hidden",
//     paddingBottom: "80px", // Ajuste para espaço da onda
//   }));

//   const SearchBar = styled(InputBase)(({ theme }) => ({
//     backgroundColor: "rgba(255,255,255,0.8)",
//     borderRadius: theme.shape.borderRadius,
//     padding: theme.spacing(0.5, 2),
//     width: "100%",
//     maxWidth: 400,
//   }));

//   const WaveSvg = styled("svg")({
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     width: "100%",
//     height: "auto",
//   });
//   return (
//     <HeaderContainer>
//       <AppBar position="static" color="transparent" elevation={0}>
//         <Toolbar sx={{ justifyContent: "space-between" }}>
//           <SearchBar placeholder="Procure seu Pokémon favorito..." />
//           <IconButton onClick={toggleTheme} color="inherit">
//             {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* Onda SVG na parte inferior */}
//       <SvgIcon
//         sx={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           width: "100%",
//           height: "auto",
//         }}
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//           <path
//             fill="#0099ff"
//             fill-opacity="1"
//             d="M0,128L60,144C120,160,240,192,360,197.3C480,203,600,181,720,149.3C840,117,960,75,1080,96C1200,117,1320,203,1380,245.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
//           ></path>
//         </svg>
//       </SvgIcon>
//     </HeaderContainer>
//   );
// }
