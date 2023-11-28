import {IMovie} from "./InterfaceMovie";

export interface IWord {
    id: number,
    name: string
}
export interface ISearch

{
    page: number,
    results: IMovie[],
    total_pages:number
}