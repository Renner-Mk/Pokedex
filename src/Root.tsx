import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import { AppRouter } from "./router/AppRouter";
import { useAppSelector } from "./redux/hooks";

export function Root() {
  const currentTheme = useAppSelector((state) => state.theme) as
    | "light"
    | "dark";
  const themeMui = useTheme();

  const theme = createTheme({
    palette: {
      mode: currentTheme,
      primary: {
        main: themeMui.palette.error.main,
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: themeMui.palette.text.secondary,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: themeMui.palette.error.light,
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: themeMui.palette.text.secondary,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundImage:
                "linear-gradient(45deg, #44f844, #e5ff00 , #fffb00)",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <LoadingModal /> */}
      <AppRouter />
    </ThemeProvider>
  );
}
