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
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
};

let highQualityImg = 493;

let imgSwitch = false;

export default function PokemonDisplay() {
  const [pokemon, setPokemon] = useState<PokemonOBJ>(initialState);
  const [isSwitching, setisSwitching] = useState(false);
  const [searchFor, setSearchFor] = useState("Arceus");

  let imageWidth = isSwitching ? "70%" : "100%";

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemonData = await fetch(
        "https://merchant-x-backend.vercel.app/api/" + searchFor
      );

      const jsonPokemonData = await pokemonData.json();
      console.log(jsonPokemonData);
      highQualityImg = jsonPokemonData.sprite.replace(
        /["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" ".png"]/g,
        ""
      );
      console.log(highQualityImg);

      setPokemon(jsonPokemonData);
    };

    // fetchPokemonData();
  }, [searchFor]);

  useEffect(() => {
    setInterval(() => {
      imgSwitch = !imgSwitch;

      setisSwitching(imgSwitch);
    }, 5000);
  }, []);

  return (
    <Container>
      <Container className={css.searchBarDisplay}>
        <InputField setSearchFor={setSearchFor} />
      </Container>

      <GridContainer>
        <GridItem className={css.gridDisplayImg} md="six">
          <img
            className={css.pokemonImage}
            style={{ maxWidth: imageWidth }}
            src={
              isSwitching
                ? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${highQualityImg}.png`
                : pokemon.sprite
            }
            alt={`Picture of the Pokemon named ${pokemon.name}`}
          />
        </GridItem>
        <GridItem md="six">
          <Container className={css.gridDisplayText}>
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
