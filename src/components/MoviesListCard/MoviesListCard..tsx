import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {Rating, Typography} from "@mui/material";

import {IMovie} from "../../interfaces";
import {urls} from "../../constants";
import css from './MoviesListCard.module.css'

interface IProps {
   movie:IMovie
}
const MoviesListCard:FC<IProps> = ({movie}) => {
    const {original_title,id,poster_path,vote_average} = movie;
    const navigate = useNavigate();
    return (
        <div className={css.CardMovie} onClick={()=>navigate(`${id}`)}>
            <img  className={css.Img} src={urls.poster(poster_path)} alt={original_title}/>
            <h3>{original_title}</h3>
            <Typography component="legend"></Typography>
            <Rating name="read-only" value={vote_average} readOnly  max={10} defaultValue={2.5} precision={0.5}/>
        </div>
    );
};

export{
    MoviesListCard
}