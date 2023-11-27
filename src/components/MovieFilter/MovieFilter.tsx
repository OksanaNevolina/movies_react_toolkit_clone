import React from 'react';
import {useParams} from "react-router-dom";

const MovieFilter = () => {
    const {id} = useParams();
    return (
        <div>
            MovieFilter
        </div>
    );
};

export {
    MovieFilter
}