import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef, FormEvent } from "react"
import { BsSearch } from "react-icons/bs"
interface Props {

    onSearch: (searchItem: string) => void

}

const SearchInput = ({ onSearch }: Props) => {

    const ref = useRef<HTMLInputElement>(null)
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if (ref.current) onSearch(ref.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} onClick={handleSubmit} />

                <Input ref={ref} placeholder="Search games..." borderRadius={20} variant="filled" />

            </InputGroup>

        </form>


    )
}

export default SearchInput