/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
// import { gsap } from "gsap"
// import { useLayoutEffect, useRef } from 'react'


interface Props {
    onSortingItem: (sortOrder: string) => void
    sortOrder: string
}

const SortSelector = ({ onSortingItem, sortOrder }: Props) => {
    // const parRef = useRef(null)
    // const onEnter = ({ currentTarget }: any) => {
    //     gsap.to(currentTarget, {
    //         backgroundColor: "#28a92b", scale: 1.1
    //     })

    // }
    // const onLeave = ({ currentTarget }: any) => {
    //     gsap.to(currentTarget, {
    //         backgroundColor: "#e77614", scale: 1
    //     })

    // }
    // useLayoutEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.to(".order", {
    //             rotation: "+=45",
    //             duration: 3,
    //             repeat: -1
    //         })
    //         gsap.to(parRef.current, {
    //             rotation: "-=45",
    //             duration: 3,
    //             repeat: -1
    //         })
    //         gsap.to(".btn", {
    //             x: 100,
    //             repeat:-1,
    //             repeatDelay:1,
    //             duration: 3,
    //             yoyo:true
            
    //         })

    //     })


    //     //cleanup animation
    //     return () => ctx.revert()
    // }, [])



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

    return (
        <>
            {/* <div >
                <h1 className='order'>order</h1>
                <p ref={parRef}>place order</p>
                <button  className="btn" style={{ padding: "1rem", backgroundColor:"orange" }}>click me</button>
            </div> */}
            <Menu >
                <MenuButton
                //  onMouseEnter={onEnter} onMouseLeave={onLeave} 
                as={Button} rightIcon={<BsChevronDown />}> Order by :{currentOrder?.label || "Relevance"}</MenuButton>
                <MenuList  >
                    {sortOrders.map(order => <MenuItem onClick={() => onSortingItem(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
                </MenuList>
            </Menu>
        </>

    )
}

export default SortSelector