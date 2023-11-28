import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre, IGenres} from "../../interfaces";
import {genreService} from "../../services";
import {AxiosError} from "axios";

interface IState {
   genres:IGenre[],

}

const initialState:IState = {
genres:[],


};

const getGenres = createAsyncThunk<IGenres,void>(
    'genresSlices/getGenres',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await genreService.getAllG();
            return data
        }catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

const genresSlices = createSlice({
    name:'genresSlices',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getGenres.fulfilled,(state, action) => {
            state.genres = action.payload.genres
        })

})
const {reducer:genresReducer,actions} = genresSlices;
const genresActions = {
    ...actions,
    getGenres

}
export {
    genresActions,
    genresReducer
}