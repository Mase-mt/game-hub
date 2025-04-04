import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/UseGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContaier from './GameCardContaier';
import { Genres } from '../hooks/useGeneres';

interface props{
  selectedGenre: Genres | null;
}

function GameGrid({selectedGenre}: props) {
    const {data, error, isLoading} = useGames(selectedGenre)

    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    
  return (
    <>
    {error&& <Text>{error}</Text>}
    <SimpleGrid columns={
      {sm: 1, md: 2, lg: 3, xl: 3}
    } spacing={3} padding={10}>
        {isLoading && skeletons.map(skeleton=><GameCardContaier key={skeleton}><GameCardSkeleton /></GameCardContaier>)}
        {data.map((game)=>(
            <GameCardContaier key={game.id}><GameCard  game={game}/></GameCardContaier>
            ))}
    </SimpleGrid></>
    
  )
}

export default GameGrid