import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
} from "@mui/material";
import {
  CardPokemonProps,
  Pokemon,
  Type,
  typeColor,
} from "../../../types/pokemon";
import backgroundImage2 from "../../../assets/pikachu.jpg";
import { useEffect, useState } from "react";
import { fetchPokemonData } from "../../../services/fetchPokemon";
import { FavButton } from "./FavButton";
import { openPokemonModal } from "../../../redux/modules/pokemonModal";
import { useAppDispatch } from "../../../redux/hooks";

export function CardPokemon({ url }: CardPokemonProps) {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const [pokemonData, setPokemonData] = useState<Pokemon | null>();
  const [isOpen, setIsOpen] = useState(false);
  const screen = useMediaQuery("(min-width:445px)");

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

  const handleOpenPokemonModal = () => {
    dispatch(openPokemonModal(url));
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
        onClick={handleOpenPokemonModal}
        sx={{
          position: "relative",
          width: "200px",
          minWidth: "180px",
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
          borderRadius: 6,
          p: 1.5,
          background: pokemonData && handleBgColor(),
          scale: `${screen ? "none" : "1.3"}`,
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
          <FavButton name={pokemonData.name} url={url} />
          <Box
            sx={{
              position: "relative",
              backgroundImage: `url(${backgroundImage2})`,
              backgroundPosition: "right",
              backgroundSize: "contain",
              width: "80%",
              height: "100px",
              marginTop: "15px",
              boxShadow:
                "inset 0px 0px 5px black, inset 0px 0px 8px black, inset 0px 0px 15px black",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${backgroundImage2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                filter: "blur(3px)", // Desfoque da imagem
                boxShadow:
                  "inset 0px 0px 5px black, inset 0px 0px 8px black, inset 0px 0px 15px black",
                zIndex: 0, // Coloca a camada extra atrás do conteúdo
              }}
            />
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
