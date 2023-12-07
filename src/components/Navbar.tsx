import { Button, HStack, Image, Show } from "@chakra-ui/react"
import logo from "../assets/game-img-logo.png"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


interface Props {
    onSearch: (searchItem: string) => void
    onToggle?: ((open: boolean) => void) 

}

const Navbar = ({ onSearch, onToggle }: Props) => {




    return (
        <>

            {/* <Hamburgar /> */}


            <HStack justifyContent="space-between" padding={{ lg: "20px" }}>
                <Image src={logo} boxSize="60px" />
                <SearchInput onSearch={onSearch} />
                <ColorModeSwitch />
                <Show below="lg">


                    <Button onClick={() => onToggle?.(!open)} >
                        click
                    </Button>
                </Show>

            </HStack>
        </>

    )
}

export default Navbar