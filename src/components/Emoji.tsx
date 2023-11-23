import { Image, ImageProps } from "@chakra-ui/react"
import thumsUp from "../assets/thumbs-up.svg"
import bullsEye from "../assets/bullseye.svg"
import meh from "../assets/no-Image.jpeg"
interface Props {
    rating: number
}
const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null
    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: "meh", boxSize: "1.5rem" },
        4: { src: thumsUp, alt: "recommended", boxSize: "1.5rem" },
        5: { src: bullsEye, alt: "execeptional", boxSize: "2rem" }
    }
    return (
        <Image {...emojiMap[rating]} />
    )
}

export default Emoji