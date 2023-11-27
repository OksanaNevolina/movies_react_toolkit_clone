import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux";
import {MovieInfoDetails} from "../MovieInfoDetails";

const MovieInfo = () => {
    const {id} = useParams();
    const {movieId} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(moviesActions.getMovieId({id}))
    },[id])
    console.log(movieId)

    return (
        <div>
            {movieId && <MovieInfoDetails movieDetails={movieId}/>}
        </div>
    );
};

export {
    MovieInfo
}