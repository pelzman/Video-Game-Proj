import { Platform } from "../hooks/useGame"

import { FaWindows, FaAndroid, FaPlaystation, FaXbox, FaApple, FaLinux } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { HStack, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons"

interface Props {
    platforms: Platform[]
}


const PlatformIconList = ({ platforms }: Props) => {

    const IconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        android: FaAndroid,
        linux: FaLinux,
        mac: FaApple,
        Xbox: FaXbox,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe
    }
    return (
        <HStack marginY={"10px"}>
            {platforms.map((platforms) => (
                <Icon as={IconMap[platforms.slug]} color='gray.500' key={platforms.id} />
            ))}

        </HStack>

    )
}

export default PlatformIconList