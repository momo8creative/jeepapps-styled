import React from "react";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./styles/GlobalStyles";
import { useThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Routes />
    </ThemeProvider>
  );
}
