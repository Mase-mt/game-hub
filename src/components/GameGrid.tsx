import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/UseGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';



function GameGrid() {
    const {games, error, isLoading} = useGames()

    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    
  return (
    <>
    {error&& <Text>{error}</Text>}
    <SimpleGrid columns={
      {sm: 1, md: 2, lg: 3, xl: 5}
    } spacing={10} padding={10}>
        {isLoading && skeletons.map(skeleton=><GameCardSkeleton key={skeleton}/>)}
        {games.map((game)=>(
            <GameCard key={game.id} game={game}/>
            ))}
    </SimpleGrid></>
    
  )
}

export default GameGrid