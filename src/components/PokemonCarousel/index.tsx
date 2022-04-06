import { useEffect, useState } from "react";
import ReactElasticCarousel from "react-elastic-carousel";

import initialState from "../../pokemonData";
import PokemonCard from "../PokemonCard";

const breakPoints = [
  { width: 0, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 900, itemsToShow: 3 },
];

let changingData = initialState;

export default function PokemonCarousel() {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const createInfiniteScrollLoop = () => {
      let newState = [...changingData.slice(1), changingData[0]];
      changingData = newState;
      setData(changingData);
    };
    setInterval(() => {
      createInfiniteScrollLoop();
    }, 5000);
  }, []);

  return (
    <ReactElasticCarousel
      breakPoints={breakPoints}
      isRTL={false}
      disableArrowsOnEnd={false}
      showArrows={false}
      initialActiveIndex={1}
      preventDefaultTouchmoveEvent={true}
    >
      {data.map((el, index) => (
        <PokemonCard key={index} name={el.name} image={el.image} />
      ))}
    </ReactElasticCarousel>
  );
}
