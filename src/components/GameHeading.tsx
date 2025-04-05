import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface props{
    gameQuery: GameQuery
}

function GameHeading({gameQuery}: props) {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <Heading marginY={5} fontSize='5xl' as='h1'>{heading}</Heading>
  )
}

export default GameHeading