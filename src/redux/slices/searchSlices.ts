import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie,ISearch} from "../../interfaces";
import {searchService} from "../../services";


interface IState {
    moviesSearch:IMovie[],
    pages:number,
    total_pages:number
}

const initialState:IState = {
    moviesSearch:[],
    pages:0,
    total_pages:0

};
const getMoviesSearch = createAsyncThunk<ISearch,{query:string,page:string}>(
    'searchSlices/getMoviesSearch',
    async ({query,page},{rejectWithValue})=>{
        try {
            const {data} = await searchService.word(query,page);
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
            state.total_pages =action.payload.total_pages
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