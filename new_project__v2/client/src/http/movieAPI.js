import { $authHost,$host} from "./index";
import { jwtDecode } from "jwt-decode";

export const createMovie= async(movie) =>{
    const {data} = await $authHost.post('api/movie',movie)
    return data
}

export const fetchMovies= async() =>{
    const {data} = await $host.get('api/movie')
    return data
}

export const fetchOneMovie= async(id) =>{
    const {data} = await $host.get('api/movie/'+id)
    return data
}