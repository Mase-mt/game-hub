import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

export interface platform{
    id: number;
    name: string;
    slug: string;
}

export interface Games{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform : platform}[]
}

interface FetchGameData{
    count: number;
    results: Games[]
}
const useGames= ()=>{
    const [games, setGames] = useState<Games[]>([]);
        const [error, setError] = useState('');

        const controller = new AbortController();
    
        useEffect(()=>{
            apiClients.get<FetchGameData>('/games',{signal: controller.signal})
            .then(res=>setGames(res.data.results))
            .catch(err=>{
                if(err instanceof CanceledError) return;
                setError(err.message)});
            // return ()=>controller.abort();
        }, []);

        return {games, error};
}

export default useGames;