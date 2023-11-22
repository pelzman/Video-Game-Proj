import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/game-img-logo.png"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
const Navbar = () => {
    return (
        <HStack justifyContent="space-between" padding='20px'>
            <Image src={logo} boxSize="60px" />
            <SearchInput  />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar