import React from 'react';
import {GenreBadge} from "../components";
import {useTitle} from "../hooks/useTitle";

const GenrePage = () => {
    useTitle('Genres')
    return (
        <div>
            <GenreBadge/>
        </div>
    );
};

export {
    GenrePage
}