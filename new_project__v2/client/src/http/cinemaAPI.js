import { $authHost,$host} from "./index";
import { jwtDecode } from "jwt-decode";

export const createCinemas= async(cinema) =>{
    const {data} = await $authHost.post('api/cinema',cinema)
    return data
}

export const fetchCinemas= async() =>{
    const {data} = await $host.get('api/cinema')
    return data
}
