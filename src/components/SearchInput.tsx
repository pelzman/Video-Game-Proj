import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"
interface Props {
    placeholder?: string
}

const SearchInput = ({ placeholder }: Props) => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input placeholder={placeholder || "Search games..."} borderRadius={20} variant="filled" />
        </InputGroup>

    )
}

export default SearchInput