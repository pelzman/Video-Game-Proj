import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/getCroppedImage"
import { Genres } from "../hooks/useGenres"

interface Props {
    onSelectGenre: (genre: Genres) => void
}
const GenureLists = ({ onSelectGenre }: Props) => {

    const { data, isLoading, error } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <>
            {error && <Text>{error}</Text>}
            <List>
                {data.map((genre) => (

                    <ListItem key={genre.id} paddingY={3}>
                        <HStack>
                            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                            <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>



                ))}

            </List>
        </>
    )
}

export default GenureLists