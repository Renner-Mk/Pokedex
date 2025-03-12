import { Box, CardMedia, Modal, Typography, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Pokemon, Type, typeColor } from "../../../types/pokemon";
import { useCallback, useEffect, useState } from "react";
import { fetchPokemonData } from "../../../services/fetchPokemon";
import { closePokemonModal } from "../../../redux/modules/pokemonModal";
import { Close } from "@mui/icons-material";
import { FavButton } from "../PokemonList/FavButton";

export function ModalPokemon() {
  const theme = useTheme();

  const dispatch = useAppDispatch();
  const { isOpen, url } = useAppSelector((state) => state.modal);

  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (isOpen) {
      const handleGetPokemonData = async () => {
        const result = (await fetchPokemonData(url)) as Pokemon;

        setPokemonData(result);
      };

      handleGetPokemonData();
    }
  }, [isOpen, url]);

  const handleClose = useCallback(
    () => dispatch(closePokemonModal()),
    [dispatch]
  );

  const handleBgColor = (): string => {
    if (pokemonData!.types.length === 1) {
      return typeColor[pokemonData!.types[0].type.name as Type];
    } else {
      return `linear-gradient(125deg, ${
        typeColor[pokemonData!.types[0].type.name as Type]
      }, ${typeColor[pokemonData!.types[0].type.name as Type]},  ${
        typeColor[pokemonData!.types[1].type.name as Type]
      }, ${typeColor[pokemonData!.types[1].type.name as Type]})`;
    }
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {pokemonData && (
          <Box
            sx={{
              bgcolor: theme.palette.background.default,
              display: "flex",
              flexDirection: "column",
              maxWidth: "900px",
              height: { xs: "100%", md: "auto" },
              margin: "auto",
              overflow: "hidden",
              overflowY: "auto",
              outline: "none",
            }}
          >
            <Box
              sx={{
                width: "450px",
                position: "relative",
                background: pokemonData && handleBgColor(),
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  position: "absolute",
                  left: "20px",
                }}
              >
                <FavButton name={pokemonData.name} url={url} />
              </Box>
              <Close
                onClick={handleClose}
                sx={{
                  cursor: "pointer",
                  position: "absolute",
                  top: "15px",
                  right: "20px",
                }}
              />
              <CardMedia
                image={
                  pokemonData.sprites.other["official-artwork"].front_default
                }
                sx={{
                  height: "300px",
                  width: "300px",
                  position: "relative",
                  // left: "50%",
                  // top: "50%",
                  // transform: "translate(-50%, -50%)",
                  // filter: "drop-shadow(25px 15px 5px #141414)",
                  // scale: 1.1,
                }}
                title={pokemonData.name}
              />
              <Box sx={{ position: "absolute", bottom: "15px", right: "15px" }}>
                {pokemonData.types.map((t) => (
                  <Box
                    key={t.type.name}
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      bgcolor:
                        theme.palette.mode === "dark" ? "black" : "white",
                      borderRadius: "100vw",
                      px: 1,
                      py: 0.4,
                      margin: "5px",
                      justifyContent: { xs: "space-around" },
                      alignItems: { xs: "center" },
                      height: { xs: "100%" },
                    }}
                  >
                    <Typography
                      fontSize={13}
                      fontWeight={900}
                      sx={{
                        color: typeColor[t.type.name as Type],
                        textTransform: "capitalize",
                        padding: "0 3px",
                      }}
                    >
                      {t.type.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography>Status Base:</Typography>
              {pokemonData.stats.map((status) => (
                <Typography
                  key={status.stat.name}
                  sx={{ textTransform: "capitalize" }}
                >
                  {status.stat.name}: {status.base_stat}
                </Typography>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
}
