import React from 'react';
import {Header} from "../components";
import {Outlet} from "react-router-dom";

import css from './MainLayount.module.css'
import {useAppSelector} from "../hooks";

const MainLayount = () => {
    const {theme} = useAppSelector(state => state.themeReducer);
    return (
        <div  className={theme?css.White:css.Black}>
            <Header />
            <Outlet/>

            </div>
    );
}

export{
    MainLayount
}