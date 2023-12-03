import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Photo} from "../Photo/Photo";
import {moviesActions} from "../../redux";
import css from './PosterPreview.module.css'

const PosterPreview = () => {
    const {movie_id} = useParams();
    const id = +movie_id
    const {posters} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    useEffect(()=>{
dispatch(moviesActions.getPhoto({id}))
    },[movie_id])

    return (
        <div >
            <div className={css.PosterPhoto}>{posters.map((photo,index)=><Photo key={index} poster={photo}/>)}</div>
        </div>
    );
};

export {
    PosterPreview
}