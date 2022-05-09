import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles/Theme";

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);
  const [initTheme, setInitTheme] = useState("light");

  const changeTheme = () => {
    setInitTheme(initTheme == "light" ? "dark" : "light");
    setTheme(initTheme == "light" ? darkTheme : lightTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
