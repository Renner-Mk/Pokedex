import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouter } from "./router/AppRouter";
import { useAppSelector } from "./redux/hooks";
import themes from "./themes/themes";

export function Root() {
  const currentTheme = useAppSelector((state) =>
    state.theme === "light" ? themes.light : themes.dark
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {/* <LoadingModal /> */}
      <AppRouter />
    </ThemeProvider>
  );
}
