import { GameQuery } from "../App";
import useData from "./useData";
import { Genres } from "./useGeneres";

export interface platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Games>(
    "/games",
    { params: { genres: gameQuery.genre?.id,
         platforms: gameQuery.platform?.id,
         ordering: gameQuery.sortOrder ,
        search: gameQuery.searchText} },
    [gameQuery]
  );

export default useGames;
