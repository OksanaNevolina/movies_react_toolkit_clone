import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {FilePpath, ICast, IMovie, IMovieId, IPhoto, IResCast, IResponseMovies} from "../../interfaces";
import {moviesService} from "../../services";
import {AxiosError} from "axios";

interface IState {
moviesList:IMovie[],
    page:number,
    errors:boolean,
    movieId:IMovieId,
    casts:ICast[],
    posters:FilePpath[]
}

const initialState:IState={
    moviesList:[],
    page:0,
    errors:null,
    movieId:null,
    casts:[],
    posters:[]

};

const getMoviesList = createAsyncThunk<IResponseMovies, { page: string }>(
    'moviesSlice/getMoviesList',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page.page);
            return data
        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

const getMovieId = createAsyncThunk<IMovieId,{id:string}>(
    'moviesSlice/getMovieId',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await moviesService.getById(id);
            return data
        }catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)
const getCastMovie = createAsyncThunk<IResCast,{id:number}>(
    'moviesSlice/getCastMovie',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await moviesService.getCast(id);
            return data
        }catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)
const getPhoto = createAsyncThunk<IPhoto,{id:number}>(
    'moviesSlice/getPhoto',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await moviesService.getImg(id);
            return data
        }catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getMoviesList.fulfilled,(state, action) => {
            const {page,results} = action.payload;
            state.page = page
            state.moviesList = results
        })
        .addCase(getMovieId.fulfilled,(state, action) => {
            state.movieId = action.payload;
        })
        .addCase(getCastMovie.fulfilled,(state, action) => {
            state.casts= action.payload.cast
        })
        .addCase(getPhoto.fulfilled,(state, action) => {
            state.posters = action.payload.posters
        })
})
const {reducer:moviesReducer,actions} = moviesSlice;

const moviesActions = {
   ...actions,
    getMoviesList,
    getMovieId,
    getCastMovie,
    getPhoto
}
export {
    moviesActions,
    moviesReducer
}