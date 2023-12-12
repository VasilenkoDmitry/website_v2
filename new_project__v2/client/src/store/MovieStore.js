import {makeAutoObservable} from "mobx";

export default class MovieStore{
    constructor(){
        
        this._movies = []
        this._cinemas = []
        
        makeAutoObservable(this)
    }

    setMovies(movies){
        this._movies = movies
    }
    setCinemas(cinemas){
        this._cinemas = cinemas
    }

    get movies(){
        return this._movies
    }
    get cinemas(){
        return this._cinemas
    }
}