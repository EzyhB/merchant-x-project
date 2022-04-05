import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/Theme/GlobalStyle.css";

import { lightTheme, darkTheme } from "../styles/Theme";
import css from "./App.module.css";
import { Container } from "../styles/Container";
import Navbar from "../Navbar";

function App() {
  const [isLight, setIsLight] = useState(false);
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar isLight={isLight} setIsLight={setIsLight} />
    </ThemeProvider>
  );
}

export default App;
