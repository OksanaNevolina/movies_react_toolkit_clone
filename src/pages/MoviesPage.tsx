import React from 'react';
import {MoviesList} from "../components";
import {useTitle} from "../hooks/useTitle";

const MoviesPage = () => {
    useTitle('Movies page')
    return (
        <div>
            <MoviesList/>
        </div>
    );
};

export {
    MoviesPage
}