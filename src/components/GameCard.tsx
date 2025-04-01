import React from 'react'
import { Games } from '../hooks/UseGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'
import getCroppedImage from '../services/image-url'

interface props{
    game: Games 
}

function GameCard({game}: props) {
  return (
    <Card width='220px' borderRadius={10} overflow='hidden'>
        <Image src={getCroppedImage(game.background_image)}/>
        <CardBody>
            <Heading fontSize='2xl'>
                {game.name}
            </Heading>
            <HStack justifyContent='space-between'>
            <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/>  
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard