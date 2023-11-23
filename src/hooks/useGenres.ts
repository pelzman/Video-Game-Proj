// import useData from "../hooks/useData";
import genres from "../data/genreData";
export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({data:genres, isLoading:false, error: null});

export default useGenres;
