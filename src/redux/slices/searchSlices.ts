import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IResponseMovies} from "../../interfaces";
import {searchService} from "../../services";
import {AxiosError} from "axios";


interface IState {
    moviesSearch:IMovie[],
    pages:number
}

const initialState:IState = {
    moviesSearch:[],
    pages:0
};
const getMoviesSearch = createAsyncThunk<IResponseMovies,{query:string}>(
    'searchSlices/getMoviesSearch',
    async ({query},{rejectWithValue})=>{
        try {
            const {data} = await searchService.word(query);
            return data
        }catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)
const searchSlices = createSlice({
    name:'searchSlices',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getMoviesSearch.fulfilled,(state, action) => {
            state.moviesSearch = action.payload.results
            state.pages = action.payload.page
        })
})

const {reducer:searchReducer,actions} = searchSlices;
const searchActions = {
    ...actions,
    getMoviesSearch
}

export {
    searchActions,
    searchReducer
}