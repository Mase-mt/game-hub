import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatforms'

function PlatformSelector() {
    const {data, error} = usePlatform();
    if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platform</MenuButton>
        <MenuList>
           {data.map(Platform=> <MenuItem fontWeight={'bold'} key={Platform.id}>{Platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector