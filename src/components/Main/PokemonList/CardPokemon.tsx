import {
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
import { useAppDispatch } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import { fetchPokemonData } from "../../../services/fetchPokemon";

export function CardPokemon({ url }: CardPokemonProps) {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const [pokemonData, setPokemonData] = useState<Pokemon | null>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    const handleGetPokemonData = async () => {
      const result = (await fetchPokemonData(url)) as Pokemon;

      setPokemonData({
        ...result,
        species: {
          ...result.species,
          name: result.species.name,
        },
      });
      setIsOpen(true);
    };

    handleGetPokemonData();
  }, [url]);

  const handleBgColor = (): string => {
    if (pokemonData!.types.length === 1) {
      return typeColor[pokemonData!.types[0].type.name as Type];
    } else {
      return `linear-gradient(to right, ${
        typeColor[pokemonData!.types[0].type.name as Type]
      }, ${typeColor[pokemonData!.types[0].type.name as Type]} 50%, ${
        typeColor[pokemonData!.types[1].type.name as Type]
      } 51%, ${typeColor[pokemonData!.types[1].type.name as Type]} 100%)`;
    }
  };

  return (
    <Zoom in={isOpen}>
      <Card
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
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
          height: 140,
          borderRadius: 6,
          p: 1.5,
          background: pokemonData && handleBgColor(),
        }}
      >
        <CardContent>
          <CardMedia
            image={pokemonData?.sprites.other["official-artwork"].front_default}
            sx={{
              height: "90px",
              width: "90px",
            }}
            title={pokemonData?.name}
          />
          <Typography>{pokemonData?.name}</Typography>
        </CardContent>
      </Card>
    </Zoom>
  );
}
