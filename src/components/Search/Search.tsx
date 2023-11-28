import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {IWord} from "../../interfaces";
import css from './Search.module.css'
import {QueryMovie} from "../QueryMovie/QueryMovie";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {searchActions} from "../../redux/slices/searchSlices";




const Search = () => {
    const [queryMovie,setQueryMovie] = useSearchParams({query:'marvel'});
    const query:string = queryMovie.get('query')
    console.log(query)

    const [queryPagSearch,setQueryPagSearch] = useSearchParams({page:'1'});
    const page = queryPagSearch.get('page')
    const dispatch = useAppDispatch();
    const {moviesSearch,total_pages} = useAppSelector(state => state.searchReducer);


    const {register,handleSubmit,reset} = useForm<IWord>();

    const currentQuery = query;
    const currentPage = page;

    useEffect(() => {
        dispatch(searchActions.getMoviesSearch({ query: currentQuery, page: currentPage }));
        reset();
    }, [currentQuery, currentPage]);

    const prev = () => {
        setQueryPagSearch(prev => {
            prev.set('page',`${+prev.get('page')-1}`)
            return prev
        })
    }
    const next = () => {
        setQueryPagSearch(prev => {
            prev.set('page',`${+prev.get('page')+1}`)
            return prev
        })
    }

    const getWord: SubmitHandler<IWord> = (qwe) => {
    setQueryMovie(prev => {
        prev.set('query', `${qwe.name}`)
        return prev
    })

}
console.log(query)
console.log(moviesSearch)

    return (
        <div className={css.Search}>
            <form onSubmit={handleSubmit(getWord)} className={css.SearchForm}>
                <input type="text" {...register('name')} />
                <button>Search</button>
            </form>
            <div className={css.SearchMovie}>{moviesSearch.map((movieSearch)=><QueryMovie key={movieSearch.id} movieSearch={movieSearch}/>)}</div>
            <div className={css.DivBut}>
                <button
                    onClick={prev}>prev</button>
                <button onClick={next}>next</button>
                <div>{currentPage} --{total_pages}</div>
            </div>

        </div>
    );
}

export {
    Search
}