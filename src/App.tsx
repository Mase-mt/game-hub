import React, { useState } from "react"
import { Box, Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { Genres } from "./hooks/useGeneres";
import PlatformSelector from "./components/PlatformSelector";
import { platform } from "./hooks/UseGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery{
  genre: Genres | null;
  platform: platform | null;
  sortOrder: string;
  searchText: string;
}


function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return <Grid templateAreas={
    {
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }
  }
  templateColumns={{
    base: "1fr",
    lg: "200px 1fr"
  }}>
    <GridItem area="nav">
      <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}></NavBar>
    </GridItem>
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenereList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
      </GridItem>
    </Show>
    <GridItem area="main">
      <Box paddingLeft={10}>
      <GameHeading gameQuery={gameQuery}/>
      <HStack spacing={5}  marginBottom={5}>
       <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
       <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery, sortOrder})}/>  
      </HStack>
      </Box>
      <GameGrid gameQuery={gameQuery}></GameGrid>
    </GridItem>

  </Grid>
  
}

export default App;
