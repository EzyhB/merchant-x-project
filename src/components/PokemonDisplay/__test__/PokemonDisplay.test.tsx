import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/Theme";
import PokemonDisplay from "..";
import userEvent from "@testing-library/user-event";

describe("Testing pokemon main display with initial state", () => {
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

describe("testing compatibility with input field & link with backend", () => {
  it("should allow users see the input Field", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <PokemonDisplay />
      </ThemeProvider>
    );

    const inputElement = screen.getByPlaceholderText("Search for a Pokemon...");
    expect(inputElement).toBeInTheDocument();
  });

  it("should allow users to type in the input Field", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <PokemonDisplay />
      </ThemeProvider>
    );

    const inputElement = screen.getByPlaceholderText("Search for a Pokemon...");
    userEvent.type(inputElement, "pikachu".repeat(10));

    expect(await screen.findByPlaceholderText(/Search for a/i)).toHaveValue(
      "pikachu".repeat(10)
    );
  });

  it("should show the pokemon searched for by the user", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <PokemonDisplay />
      </ThemeProvider>
    );

    const inputElement = screen.getByPlaceholderText("Search for a Pokemon...");
    userEvent.type(inputElement, "pikachu");

    // const buttonElement = screen.getByTitle("submit search");
    // userEvent.click(buttonElement);
  });
});
