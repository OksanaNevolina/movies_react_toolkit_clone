import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard.";
import css from './MoviesList.module.css'
import {Pagination} from "@mui/material";

const MoviesList = () => {
    const {moviesList,page:pageAll} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    useEffect(()=>{
        dispatch(moviesActions.getMoviesList({page}))
    },[page])

    return (
        <div className={css.Wrap}>
           <div className={css.ListMovie}>{moviesList.map(movie =><MoviesListCard key={movie.id} movie={movie}/>)}</div>
            <Pagination
                count={500}
                defaultPage={+query.get('page')}
                variant="outlined"
                color="primary"
                onChange={(event, pageAll)=>setQuery({page: pageAll.toString()})}
            />
</div>
    );
};

export {
    MoviesList
}