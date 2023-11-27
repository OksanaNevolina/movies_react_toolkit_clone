import {IMovie} from "../../interfaces";
import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {urls} from "../../constants";
import {Rating, Typography} from "@mui/material";
import css from './QueryMovie.module.css'

interface Iprops {
    movieSearch:IMovie
}

const QueryMovie:FC<Iprops> = ({movieSearch}) => {
    const {id,poster_path,release_date,original_title,vote_average} = movieSearch;

    const navigate = useNavigate();

    return (
        <div onClick={()=> navigate(`/movies/${id}`)}>
            <div className={css.PhotoQuery}>
                <img  src={urls.poster(poster_path)} alt={original_title} className={css.PhotoQueryImg}/>
                <h4>{original_title}</h4>
                <div>Release date: {release_date}</div>
                <div> <b>Rating:</b></div>
                <Typography component="legend"></Typography>
                <Rating name="read-only" value={vote_average} readOnly max={10} defaultValue={2.5} precision={0.5}/>
            </div>

        </div>
    );
};

export {
    QueryMovie
};