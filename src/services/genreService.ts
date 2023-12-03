import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IGenres} from "../interfaces";
import {IRes} from "../types";

const genreService={
    getAllG:():IRes<IGenres>=>axiosService.get(urls.genre())
}
export {
    genreService
}