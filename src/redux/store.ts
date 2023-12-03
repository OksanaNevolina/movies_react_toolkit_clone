import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices/moviesSlice";
import {themeReducer} from "./slices/themeSlice";
import {genresReducer} from "./slices/genresSlices";
import {searchReducer} from "./slices/searchSlices";

const store = configureStore({
    reducer:{
        moviesReducer,
        themeReducer,
        genresReducer,
        searchReducer
    }
}
)
export {
    store
}