import useData from "./useData";

interface platforms{
    id: number;
    name: string;
    slug: string;
}

const usePlatform =()=> useData<platforms>('/platforms/lists/parents');

export default usePlatform;