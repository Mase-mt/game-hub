import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface props{
    onSelectSortOrder: (sortOrder: string)=>void;
    sortOrder: string;
}

function SortSelector({onSelectSortOrder,sortOrder}: props) {
    const sortOrders = [
        {'value':'', 'label':'Relevance'},
        {'value':'-added', 'label':'Date added'},
        {'value':'name', 'label':'Name'},
        {'value':'-released', 'label':'Release date'},
        {'value':'-metacritic', 'label':'Popularity'},
        {'value':'-rating', 'label':'Average rating'},
    ]
    const currentSortOrder = sortOrders.find(order=> order.value === sortOrder)
  return (
<Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
    <MenuList>
     {sortOrders.map(Order=><MenuItem onClick={()=>onSelectSortOrder(Order.value)} key={Order.value} value={Order.value}>{Order.label}</MenuItem>)}
    </MenuList>
</Menu>
  )
}

export default SortSelector