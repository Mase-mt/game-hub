import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatforms'
import { platform } from '../hooks/UseGames';

interface props{
    onSelectPlatform: (platform: platform)=>void;
    selectedPlatform: platform | null;
}

function PlatformSelector({onSelectPlatform,selectedPlatform}: props) {
    const {data, error} = usePlatform();
    if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
           {data.map(Platform=> <MenuItem onClick={()=>onSelectPlatform(Platform)} fontWeight={'bold'} key={Platform.id}>{Platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector