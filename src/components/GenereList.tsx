import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGeneres'
import getCroppedImage from '../services/image-url';

function GenereList() {
    const {data, isLoading, error} = useGenres();
    if(isLoading) return <Spinner color='red.500' />
  return (
    <List paddingY={7}>
        {data.map(genre=><ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImage(genre.image_background)}/>
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenereList