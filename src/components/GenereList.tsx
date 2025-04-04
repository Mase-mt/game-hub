import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genres } from '../hooks/useGeneres'
import getCroppedImage from '../services/image-url';

interface props{
  onSelectGenre: (genre: Genres)=>void;
  selectedGenre: Genres | null
}

function GenereList({selectedGenre, onSelectGenre}: props) {
    const {data, isLoading, error} = useGenres();
    if(isLoading) return <Spinner color='red.500' />
  return (
    <List paddingY={7}>
        {data.map(genre=><ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImage(genre.image_background)}/>
            <Button colorScheme={genre.id === selectedGenre?.id ? 'green': ''} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}  variant='link' onClick={()=>onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenereList