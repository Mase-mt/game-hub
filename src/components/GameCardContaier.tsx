import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface props{
    children: ReactNode
}

function GameCardContaier({children}: props) {
  return (
    <Box height='350px' borderRadius={10} overflow='hidden'>{children}</Box>
  )
}

export default GameCardContaier