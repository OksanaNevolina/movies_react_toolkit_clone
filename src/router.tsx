import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayount} from "./layounts";
import {GenrePage, MoviesPage, SearchPage} from "./pages";
import {MovieInfo, MoviesList,PosterPreview} from "./components";


const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayount/>,
        children:[
            {
                index:true,
                element:<Navigate to={'movies'}/>
            },
            {
                path:'movies',
                element:<MoviesPage/>
            },
            {
                path:'movies/:id',
                element:<MovieInfo/>,
            },
            {
                path:'movie/:movie_id/images',
                element:<PosterPreview/>
            },
            {
                path:'genres',
                element:<GenrePage/>
            },
            {
                path:'genres/:id' ,
                element:<MoviesList/>
            },
            {
                path:'genres/:id/:id' ,
                element:<MovieInfo/>
            },
            {
                path:'search',
                element:<SearchPage/>
            },

        ]
    }
])
export {
    router
}