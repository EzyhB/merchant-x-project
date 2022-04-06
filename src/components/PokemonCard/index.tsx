import { Container } from "../styles/Container";
import { Typography } from "../styles/Typography";

import css from "./PokemonCard.module.css";

interface Props {
  name: string;
  image: string;
}

export default function PokemonCard({ name, image }: Props) {
  return (
    <Container id={css.pokemonCardBody}>
      <Typography id={css.pokemonCardText} variant="h5">
        {name}
      </Typography>
      <img src={image} alt={`Pokemon called ${name}`} />
    </Container>
  );
}
