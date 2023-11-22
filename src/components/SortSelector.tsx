import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
interface Props {
    onSortingItem: (sortOrder: string) => void
    sortOrder: string
}

const SortSelector = ({ onSortingItem, sortOrder }: Props) => {
    //create array of object to prevent repitition
    const sortOrders = [
        { value: '', label: 'Relevance' },

        { value: '-added', label: 'Date added' },

        { value: 'name', label: 'Name' },

        { value: '-released', label: 'Release date' },

        { value: '-metacritic', label: 'Popularity' },

        { value: '-rating', label: 'Average rating' }
    ]
    const currentOrder = sortOrders.find((order) => order.value === sortOrder)
    console.log(currentOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}> Order by :{currentOrder?.label || "Relevance"}</MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem onClick={() => onSortingItem(order.value)} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector