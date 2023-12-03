import React, {FC} from 'react';

import {FilePpath} from "../../interfaces";
import {urls} from "../../constants";
import css from './Photo.module.css'
 interface IProps {
     poster:FilePpath
 }
const Photo:FC<IProps> = ({poster:{file_path}}) => {
    return (
        <div>
            <div className={css.Photo}>
                <img src={urls.poster(file_path)} alt="photo"/>
            </div>
        </div>
    );
};

export {
    Photo
}