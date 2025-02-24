import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  Zoom,
} from "@mui/material";
import {
  CardPokemonProps,
  Pokemon,
  Type,
  typeColor,
} from "../../../types/pokemon";
// import { useAppDispatch } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import { fetchPokemonData } from "../../../services/fetchPokemon";
import { FavButton } from "./FavButton";

export function CardPokemon({ url }: CardPokemonProps) {
  // const dispatch = useAppDispatch();
  const theme = useTheme();

  const [pokemonData, setPokemonData] = useState<Pokemon | null>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    const handleGetPokemonData = async () => {
      const result = (await fetchPokemonData(url)) as Pokemon;

      setPokemonData(result);
      setIsOpen(true);
    };

    handleGetPokemonData();
  }, [url]);

  const handleBgColor = (): string => {
    if (pokemonData!.types.length === 1) {
      return typeColor[pokemonData!.types[0].type.name as Type];
    } else {
      return `linear-gradient(125deg, ${
        typeColor[pokemonData!.types[0].type.name as Type]
      }, ${typeColor[pokemonData!.types[0].type.name as Type]},  ${
        typeColor[pokemonData!.types[1].type.name as Type]
      }, ${typeColor[pokemonData!.types[1].type.name as Type]} 100%)`;
    }
  };

  if (!pokemonData) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" color="textSecondary">
          Carregando...
        </Typography>
      </Box>
    );
  }

  return (
    <Zoom in={isOpen}>
      <Card
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          border: `2px solid ${
            theme.palette.mode === "light" ? "white" : "black"
          }`,
          boxShadow:
            theme.palette.mode === "light"
              ? "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
              : "0px 2px 1px -1px rgba(255, 255, 255, 0.2),0px 1px 1px 0px rgba(255, 255, 255, 0.14),0px 1px 3px 0px rgba(255, 255, 255, 0.12)",
          flexDirection: "column",
          cursor: "pointer",
          gap: 1,
          // height: "250px",
          borderRadius: 6,
          p: 1.5,
          background: pokemonData && handleBgColor(),
        }}
      >
        <CardContent
          sx={{
            padding: "0 !important",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              bgcolor: "white",
              width: "80%",
              height: "100px",
              marginTop: "15px",
              boxShadow:
                "inset 0px 0px 5px black, inset 0px 0px 8px black, inset 0px 0px 15px black",
              overflow: "hidden",
              // "&::before": {
              //   content: '""',
              //   height: "7px",
              //   width: "35px",
              //   bgcolor: "#000000ba",
              //   display: "block",
              //   borderRadius: "80%",
              //   position: "absolute",
              //   top: "103px",
              //   left: "41%",
              //   boxShadow:
              //     "0px 0px 2px rgba(0, 0, 0, 0.377), 0px 2px 5px rgba(0, 0, 0, 0.377), 0px 4px 7px rgba(0, 0, 0, 0.377), 0px 6px 10px rgba(0, 0, 0, 0.377)",
              // },
            }}
          >
            <CardMedia
              image={
                pokemonData.sprites.other["official-artwork"].front_default
              }
              sx={{
                height: "90px",
                width: "90px",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                filter: "drop-shadow(25px 15px 5px #141414)",
                // scale: 1.1,
              }}
              title={pokemonData.name}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // width: "100%",
                marginTop: "15px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "black" : "white",
                  textTransform: "capitalize",
                  margin: "0 10px 0 5px",
                }}
              >
                {pokemonData.species.name}
              </Typography>

              <FavButton
                name={pokemonData.name}
                url={url}
                havePadding={false}
              />
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                {pokemonData.types.map((t) => (
                  <Box
                    key={t.type.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 0.5,
                      bgcolor:
                        theme.palette.mode === "dark" ? "black" : "white",
                      borderRadius: "100vw",
                      px: 1,
                      py: 0.4,
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
          </Box>
        </CardContent>
      </Card>
    </Zoom>
  );
}
