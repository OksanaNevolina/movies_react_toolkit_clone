import React, {FC} from 'react';

import css from './GenresInfo.module.css'
import {IGenre} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    genre:IGenre
}

const GenresInfo:FC<IProps> = ({genre}) => {
    const {name,id} = genre;
    const navigate = useNavigate();
    const navigeteGenre = () => {
        navigate(`${id}`)
    }
    return (
        <div onClick={navigeteGenre}>
            <div className={css.GenreDiv}>{name}</div>
        </div>
    );
};
export {
    GenresInfo
};