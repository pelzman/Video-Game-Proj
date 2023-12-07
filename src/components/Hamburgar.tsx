import { Button } from "@chakra-ui/react"
interface Props {
 onToggle : ()=>void
}

const Hamburgar = ({onToggle}:Props) => {
    return (
        <Button onClick={()=>onToggle()} margin={5}>X</Button>
    )
}

export default Hamburgar