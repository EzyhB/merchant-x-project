import { useState } from "react";
import { Container } from "../styles/Container";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";
import { Typography } from "../styles/Typography";

import css from "./PokemonDisplay.module.css";

interface PokemonOBJ {
  name: string;
  description: string;
  image: string;
}

const initialState = {
  name: "Arceus",
  description:
    "According to the legends of Sinnoh, this Pokémon emerged from an egg and shaped all there is in this world.",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/493.png",
};

export default function PokemonDisplay() {
  const [pokemon, setPokemon] = useState<PokemonOBJ>(initialState);

  return (
    <Container>
      

      <GridContainer>
        <GridItem className={css.gridDisplay} md="six">
          <img
            className={css.pokemonImage}
            src={pokemon.image}
            alt={`Picture of the Pokemon named ${pokemon.name}`}
          />
        </GridItem>
        <GridItem md="six">
          <Container className={css.gridDisplay}>
            <Typography id={css.pokemonName} variant="h2">
              {pokemon.name}
            </Typography>
          </Container>
          <Container className={css.gridDisplay}>
            <Typography>{pokemon.description}</Typography>
          </Container>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
