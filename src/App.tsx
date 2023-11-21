import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenureLists from "./components/GenureLists";
import { Genres } from "./hooks/useGenres";


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null)


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"aside nav" "aside main"`,
      }}

      templateColumns={
        {
          base: '1fr',
          sm: '1fr',
          lg: '200px 1fr'
        }
      }
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenureLists selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>

      <GridItem area="main" paddingX={4}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
