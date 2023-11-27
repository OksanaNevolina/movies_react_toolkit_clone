import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {Switch} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeTheme} from "../../redux";


const Header = () => {
    const dispatch = useAppDispatch();
    const {theme} = useAppSelector(state => state.themeReducer);
    return (
        <div >
        <div className={css.Header}>
            <div className={css.Logo}>The MovieDB</div>
            <div  className={css.Navlink}>
                <NavLink to={'/movies'}>MOVIES</NavLink>
                <NavLink to={'/genres'}>GENRES</NavLink>
                <NavLink to={'/search'}>SEARCH</NavLink>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div >
                    <Switch
                        checked={theme}
                        onChange={()=>dispatch(changeTheme())}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
                <div className={css.User}>
                    <div >{<UserInfo/>}</div>
                    <div>user</div>
                </div>
            </div>


        </div>
        </div>

    );
};

export {
    Header
}