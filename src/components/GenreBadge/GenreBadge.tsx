import React, {useEffect} from 'react';

import css from './GenreBadge.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";

import {GenresInfo} from "../GenresInfo/GenresInfo";
import {genresActions} from "../../redux";


const GenreBadge = () => {
    const {genres} = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();
    useEffect(()=>{
dispatch(genresActions.getGenres())
        },[])
        console.log(genres)
        return (
            <div className={css.GenreWrap}>
                {genres.map(genre=><GenresInfo key={genre.id} genre={genre}/>)}

            </div>
        );
    };


export {
    GenreBadge
}