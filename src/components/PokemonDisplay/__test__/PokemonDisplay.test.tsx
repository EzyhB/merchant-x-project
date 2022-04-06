import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/Theme";
import PokemonDisplay from "..";

describe("Testing pokemon main display initial state", () => {
  it("should render the pokemon image", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <PokemonDisplay />
      </ThemeProvider>
    );
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });

  it("should render the title with pokemon name", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <PokemonDisplay />
      </ThemeProvider>
    );

    const titleElement = screen.getByText("Arceus");
    expect(titleElement).toBeInTheDocument();
  });

  it("should show the pokemon description & it should have the correct font size", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <PokemonDisplay />
      </ThemeProvider>
    );

    const paragraphElement = screen.getByText(
      /According to the legends of Sinnoh/i
    );
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveStyle({
      "font-size": "1rem",
      "font-weight": "400",
    });
  });
});
