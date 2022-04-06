import { useEffect, useState } from "react";
import { Container } from "../styles/Container";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";
import { InputField } from "../styles/InputField";
import { Typography } from "../styles/Typography";

import css from "./PokemonDisplay.module.css";

interface PokemonOBJ {
  name: string;
  description: string;
  sprite: string;
}

const initialState = {
  name: "Arceus",
  description:
    "According to the legends of Sinnoh, this Pokémon emerged from an egg and shaped all there is in this world.",
  sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/493.png",
};

export default function PokemonDisplay() {
  const [pokemon, setPokemon] = useState<PokemonOBJ>(initialState);
  const [searchFor, setSearchFor] = useState("Arceus");

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemonData = await fetch(
        "https://merchant-x-backend.vercel.app/api/" + searchFor
      );

      const jsonPokemonData = await pokemonData.json();
      console.log(jsonPokemonData);

      setPokemon(jsonPokemonData);
    };

    // fetchPokemonData();
  }, [searchFor]);

  return (
    <Container>
      <Container className={css.searchBarDisplay}>
        <InputField setSearchFor={setSearchFor} />
      </Container>

      <GridContainer>
        <GridItem className={css.gridDisplay} md="six">
          <img
            className={css.pokemonImage}
            src={pokemon.sprite}
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
