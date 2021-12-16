import { Component } from "react";

import './Movies.css'
import React from "react";


class Movies extends Component{
    constructor(){
        super()
        this.state={
            search :[]
        }
    }
    getMovieResult=(e)=>{
        e.preventDefault();
        fetch('https://ghibliapi.herokuapp.com/films')
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            this.setState({
                search:data
            })
            console.log(data)
        })
    }
    render(){
        
        return(
            <div id='movie-display'>
                
                <div>
                    <h1>Select a Movie</h1>
                <select>
                    <option value="empty"></option>
                    <option value="volvo">Volvo</option>
                
                </select>
                </div>

            </div>
        )
    }
}

export default Movies;
