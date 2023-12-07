import { Button, HStack, Heading, Image, List, ListItem, Show, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/getCroppedImage"
import { Genres } from "../hooks/useGenres"
import { Platform } from "../hooks/useGame"


interface Props {
    onSelectGenre: (genre: Genres) => void
    selectedGenre?: Genres | null;
    selectedPlatform?: Platform | null
    onToggle?: () => void

}
const GenureLists = ({ selectedGenre, onSelectGenre, onToggle }: Props) => {

    const { data } = useGenres()


    // if (error) return null
    // if (isLoading) return <Spinner />
    return (
        <>
            <HStack justifyContent="space-between">
                <Heading as='h1' fontSize='2xl' marginBottom="15px">Genres</Heading>
                <Show below="lg">
                    <Text onClick={onToggle} fontSize={25}>X</Text>
                </Show>

            </HStack>


            <List>
                {data.map((genre) => (

                    <ListItem key={genre.id} paddingY={3} paddingX={{ md: 5 }}>
                        <HStack>
                            <Image boxSize="32px" borderRadius={8} objectFit="cover" src={getCroppedImageUrl(genre.image_background)} />
                            <Button fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} onClick={() => {
                                onSelectGenre(genre)
                                onToggle
                            }} fontSize='lg' variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>



                ))}

            </List>
        </>
    )
}

export default GenureLists