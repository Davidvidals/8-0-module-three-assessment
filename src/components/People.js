import { Component } from "react";
import './People.css';

import React from "react";

class People extends Component{
    constructor(){
        super()
        this.state={
            search :{},
            userInput :''
        }
    }
    
   
   
    render(){
  
        return(
            <div className='people'>
               
                <h1>Search for a Person</h1>
                <div id='search-container'>
                    <form id='search' >
                        <input type='text' id='text' />
                        <button type='submit'>Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default People;