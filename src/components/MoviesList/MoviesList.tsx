import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useParams, useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard.";
import css from './MoviesList.module.css'
import {Pagination} from "@mui/material";

const MoviesList = () => {
    const {moviesList, total_pages} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    useEffect(()=>{
        dispatch(moviesActions.getMoviesList({page}))
    },[dispatch,page])

    const filteredMovies = moviesList.filter(function(movie) {
        return movie.genre_ids.includes(+id);
     });
    return (
        <div className={css.Wrap}>
            {id ?
                <div className={css.ListMovie}>{filteredMovies.map(movie => <MoviesListCard key={movie.id}
                                                                                            movie={movie}/>)}</div>
                :
                <div className={css.ListMovie}>{moviesList.map(movie => <MoviesListCard key={movie.id}
                                                                                        movie={movie}/>)}</div>
            },
             <Pagination
                    count={total_pages}
                    defaultPage={+query.get('page')}
                    variant="outlined"
                    color="primary"
                    onChange={(event, page)=>setQuery({page: page.toString()})}
                />


</div>
    );
};

export {
    MoviesList
}