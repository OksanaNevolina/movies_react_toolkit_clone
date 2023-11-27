import React from 'react';
import {Search} from "../components";
import {useTitle} from "../hooks/useTitle";

const SearchPage = () => {
    useTitle('Search')
    return (
        <div>
          <Search/>
        </div>
    );
};

export {
    SearchPage
}