import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Genres{
    id: number;
    name: string;
}

const  useGenres = () => useData<Genres>('/genres');

export default useGenres;

