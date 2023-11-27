import React, {FC, useEffect} from 'react';
import {IMovieId} from "../../interfaces";
import {Rating, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {urls} from "../../constants";
import css from './MovieInfoDetails.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Cast} from "../Cast/Cast";
import {moviesActions} from "../../redux";
import {useTitle} from "../../hooks/useTitle";

interface IProps {
    movieDetails:IMovieId
}

const MovieInfoDetails:FC<IProps> = ({movieDetails}) => {
    useTitle('Movie Details')
    const navigate = useNavigate();
    const {original_title,overview,genres,release_date,vote_average,poster_path,id,runtime} = movieDetails;

    const dispatch = useAppDispatch();
    const {casts} = useAppSelector(state => state.moviesReducer);

    useEffect( ()=>{
      dispatch(moviesActions.getCastMovie({id}))
    }, [id])

    return (
        <div>
            <>
                <div className={css.MovieById}>
                    <img  src={urls.poster(poster_path)} alt="original_title" className={css.ImgPoster}/>
                    <button onClick={()=>navigate(`/movie/${id}/images`)}>More posters</button>

                    <div className={css.info}>
                        <div className={css.original_title}> <b>{original_title}</b></div>
                        <div>{overview}</div>
                        <div> <b>Rating:</b></div>
                        <Typography component="legend"></Typography>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Rating name="read-only" value={vote_average} readOnly max={10} defaultValue={2.5} precision={0.5}/>
                        <div><b>Genres</b>:</div>
                        <div className={css.genre}>{genres.map(genre=><div className={css.genreName}>{genre.name}</div>)}</div>
                        <div>Release date: <b>{release_date} </b></div>
                        <div>Runtime: <b>{runtime} min</b></div>
                    </div>
                </div>
                <div>
                    <h2>Main cast :</h2>
                    <div className={css.Cast}>{casts.map(cast=><Cast cast={cast}key={cast.id}/>)}</div>
                </div>
            </>
        </div>
    );
};

export {
    MovieInfoDetails
}