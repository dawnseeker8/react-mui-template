import { CssBaseline, ThemeProvider } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { RootState } from "./store";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const darkMode: boolean = useSelector(
    (state: RootState) => state.theme.darkMode
  );

  const theme = React.useMemo(
    () => (darkMode ? darkTheme : lightTheme),
    [darkMode]
  );

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
