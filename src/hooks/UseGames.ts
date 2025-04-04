import useData from "./useData";
import { Genres } from "./useGeneres";

export interface platform{
    id: number;
    name: string;
    slug: string;
}

export interface Games{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform : platform}[];
    metacritic: number;
}

const useGames= (selectedGenre: Genres | null)=> useData<Games>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;