import { Component } from "react";

import './Movies.css'
import React from "react";


class Movies extends Component{
    constructor(){
        super()
        this.state={
            search :[],
            film: null,
        }
    }
    

    fetchMovies =()=>{
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res=>res.json())
            .then((data)=>{
                this.setState({
                   film: data
                })
            })
    }

    componentDidMount =()=>{
        this.fetchMovies();
    }
    
  
    
    render(){
        
        return(
            <div className='movies'>
                
                <div>
                    <h1>Select a Movie</h1>
                <select >
                    <option value='test'> test </option>
                
                </select>
                </div>

            </div>
        )
    }
}

export default Movies;
