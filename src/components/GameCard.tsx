
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"

import { Game } from "../hooks/useGame"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/getCroppedImage"
interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {

    return (

        <Card   >
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList key={game.id} platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>

            </CardBody>
        </Card>


    )
}

export default GameCard





