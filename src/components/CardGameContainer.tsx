import { Box } from '@chakra-ui/react'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const CardGameContainer = ({ children }: Props) => {
    return (
        <Box width="100%" borderRadius={10} overflow="hidden"  >
            {children}
        </Box>
    )
}

export default CardGameContainer