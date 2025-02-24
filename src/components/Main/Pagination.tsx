import { WestRounded, EastRounded } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  Divider,
} from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setCurrentPage,
  setTotalPages,
} from "../../redux/modules/paginationSlice";
import { toggleOnlyFavorites } from "../../redux/modules/filterSlice";

export function Pagination() {
  const dispatch = useAppDispatch();
  const pagination = useAppSelector((state) => state.pagination);
  // const favorites = useAppSelector((state) => state.favorite);
  const pokemon = useAppSelector((state) => state.pokemon);
  const filter = useAppSelector((state) => state.filter);

  const handlePrev = () => dispatch(setCurrentPage(pagination.currentPage - 1));
  const handleNext = () => dispatch(setCurrentPage(pagination.currentPage + 1));

  const handlePageChange = (event: SelectChangeEvent<number>) => {
    const selectedPage = event.target.value as number;
    dispatch(setCurrentPage(selectedPage));
  };

  const toggleFavoritesView = () => {
    dispatch(toggleOnlyFavorites());
  };

  useEffect(() => {
    const totalPages = Math.ceil(
      pokemon.length === 0 ? 1 : pokemon.length / pagination.perPage
    );

    dispatch(setTotalPages(totalPages));
    dispatch(setCurrentPage(1));
  }, [dispatch, filter.onlyFavorites, pagination.perPage, pokemon.length]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <IconButton
          disabled={pagination.currentPage === 1}
          onClick={handlePrev}
        >
          <WestRounded />
        </IconButton>
        <Select
          sx={{
            padding: 1,
            maxHeight: "150px",
            borderRadius: "100vw",
            pl: 2,
          }}
          MenuProps={{
            PaperProps: {
              sx: { maxHeight: 250 },
            },
          }}
          value={pagination.currentPage}
          onChange={handlePageChange}
        >
          <MenuItem disabled>Pages</MenuItem>
          {Array.from({ length: pagination.totalOfPage }, (_, index) => (
            <MenuItem key={index + 1} value={index + 1}>
              {index + 1}
            </MenuItem>
          ))}
        </Select>
        <IconButton
          disabled={pagination.currentPage === pagination.totalOfPage}
          onClick={handleNext}
        >
          <EastRounded />
        </IconButton>
      </Box>

      <Divider sx={{ margin: "15px 0" }} />

      <Box>
        <Button
          variant="contained"
          color={filter.onlyFavorites ? "secondary" : "primary"}
          onClick={toggleFavoritesView}
        >
          {filter.onlyFavorites ? "Mostrar Todos" : "Mostrar Favoritos"}
        </Button>
      </Box>

      {/* <Box>
        {currentPagePokemons.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
      </Box> */}
    </Box>
  );
}
