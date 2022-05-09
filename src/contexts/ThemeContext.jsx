import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import useStorage from "../hooks/useStorage";
import { GlobalStyles } from "../styles/GlobalStyles";
import { darkTheme, lightTheme } from "../styles/ThemeStyles";

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider1({ children }) {
  const [theme, setTheme] = useState(lightTheme);
  // const [defaultTheme, setDefaultTheme] = useState("light");
  const [localTheme, setLocalTheme] = useStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(localTheme == "light" ? darkTheme : lightTheme);
    // setDefaultTheme(localTheme == "light" ? "dark" : "light");
    setLocalTheme(localTheme == "light" ? "dark" : "light");
  };

  useEffect(() => {
    console.log(localTheme);
    setTheme(localTheme == "light" ? lightTheme : darkTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ localTheme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
