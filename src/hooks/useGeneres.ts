import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface Genres{
    id: number;
    name: string;
}

interface FetchGenreData{
    count: number;
    results: Genres[]
}
const  useGenres = () =>{
    const [genres, setGenres] = useState<Genres[]>([]);
        const [error, setError] = useState('');
        const [isLoading, setLoading] = useState(false);

        const controller = new AbortController();
    
        useEffect(()=>{
            setLoading(true);
            apiClients.get<FetchGenreData>('/genres',{signal: controller.signal})
            .then(res=>{setGenres(res.data.results),
                setLoading(false);
            })
            .catch(err=>{
                if(err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)});
            // return ()=>controller.abort();
        }, []);

        return {genres, error, isLoading};
}

export default useGenres;

