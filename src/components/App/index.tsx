import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/Theme/GlobalStyle.css";

import { lightTheme, darkTheme } from "../styles/Theme";
import { Container } from "../styles/Container";
import Navbar from "../Navbar";
import PokemonDisplay from "../PokemonDisplay";
import PokemonCarousel from "../PokemonCarousel";

function App() {
  const [isLight, setIsLight] = useState(false);
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar isLight={isLight} setIsLight={setIsLight} />
      <Container>
        <PokemonDisplay />
        <PokemonCarousel />
      </Container>
    </ThemeProvider>
  );
}

export default App;
