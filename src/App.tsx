import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenureLists from "./components/GenureLists";
import { Genres } from "./hooks/useGenres";
import PlatformSelectItem from "./components/PlatformSelectItem";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genres | null

  platform: Platform | null
  sortOrder: string
  searchItem: string
  title: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)


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
          lg: '250px 1fr'
        }
      }
    >
      <GridItem area="nav">
        <Navbar onSearch={(searchItem) => setGameQuery({ ...gameQuery, searchItem })} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} marginTop={8} >
          <GenureLists selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>

      <GridItem area="main" paddingX={4}>
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} marginBottom={5}>
          <PlatformSelectItem selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSortingItem={(sortOrder: string) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
