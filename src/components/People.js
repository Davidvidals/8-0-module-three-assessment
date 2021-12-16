import { Component } from "react";
import './People.css';

import React from "react";

class People extends Component{
    constructor(){
        super()
        this.state={
            search :[],
            userInput :''
        }
    }
    getResult=(e)=>{
        e.preventDefault();
        fetch(`https://ghibliapi.herokuapp.com/people`)
        .then ((res)=>{
          return res.json()
        }).then((data)=>{
            console.log(data)
          this.setState({
            search: data
          })
        })
      }

   
    render(){
    //   fetch("https://ghibliapi.herokuapp.com/people")
    //   .then((res)=>{
    //       return res.json()
    //   }) .then ((data)=>{
    //       console.log(data)
    //   })
  
        // console.log("https://ghibliapi.herokuapp.com/people")
        return(
            <div id='people-display'>
               
                <h1>Search For a Person</h1>
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