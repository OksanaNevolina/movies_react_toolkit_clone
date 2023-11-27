import {createSlice} from "@reduxjs/toolkit";
interface IState {
    theme:boolean
}

const initialState:IState={
    theme:false
};
const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        changeTheme:state=>{
            state.theme= !state.theme
        }
        // changeTheme:()=> changeTheme(prevState => !prevState)
    },
    extraReducers:builder => builder
})
const {reducer:themeReducer, actions:{changeTheme}} = themeSlice;

export {
    themeReducer,
    changeTheme

}