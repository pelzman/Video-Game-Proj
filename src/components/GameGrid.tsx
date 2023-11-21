
import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import LoadSkeletom from "./LoadSkeletom";
import CardGameContainer from "./CardGameContainer";
import useGame from "../hooks/useGame"
import { Genres } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genres |null
}

const GameGrid = ({selectedGenre}:Props) => {
  const { data, error, isLoading } = useGame(selectedGenre)
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 5 }


      } spacing={3}>

        {isLoading && skeletons.map((skeleton) => (
          <CardGameContainer key={skeleton}>
            <LoadSkeletom />
          </CardGameContainer>)

        )}
        {data.map((game) => (
          <CardGameContainer key={game.id}>
            <GameCard game={game} />
          </CardGameContainer>



        ))}
      </SimpleGrid>


    </>

  )
};

export default GameGrid;
