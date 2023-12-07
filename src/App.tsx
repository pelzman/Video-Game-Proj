import { useState } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
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
  toggle: boolean
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  const [open, setOpen] = useState(false)

  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main" `,
        lg: `"nav nav" "aside main"`,
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
        <Navbar onToggle={(open: boolean) => setOpen(!open)} onSearch={(searchItem) => setGameQuery({ ...gameQuery, searchItem })} />
      </GridItem>

      <GridItem area="aside" zIndex={{ base: 1300 }} marginRight={{ base: "30px" }} marginTop={{ base: "100px", lg: "20px" }} width={{ base: "300px" }} >
        <Show above="lg">
          <GenureLists selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </Show>
        <Show below="lg">
          <Box backgroundColor="#6c6c6c" marginTop="-50px" marginRight="-10px" paddingX={5}>
            {open && <GenureLists onToggle={() => setOpen(false)} selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />}
          </Box>

        </Show>

      </GridItem>



      <GridItem area="main" paddingX={4} paddingTop={{ base: "100px", lg: "30px" }}>
        <Box>
          <GameHeading gameQuery={gameQuery} />
        </Box>

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
