import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IMovieId, IPhoto, IResCast, IResponseMovies} from "../interfaces";
import {IRes} from "../types";

const moviesService ={
    getAll:(page:string):IRes<IResponseMovies> => axiosService.get(urls.movie.base(), {params:{page}}),
    getById:(id:string):IRes<IMovieId>=> axiosService.get(urls.movie.byId(id)),
    getImg:(id:number):IRes<IPhoto>=>axiosService.get(urls.movie.images(id)),
    getCast:(id:number):IRes<IResCast>=>axiosService.get(urls.movie.credits(id))

}

export {
    moviesService
}
