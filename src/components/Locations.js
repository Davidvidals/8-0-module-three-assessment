import './Locations.css'
import { Component } from 'react'

import React from "react";

class Locations extends Component{
   constructor(){
       super()
       this.state={

       }
   }
   componentDidMount(){
    fetch("https://ghibliapi.herokuapp.com/locations")
        .then(res=>res.json())
        .then((data)=>{
            this.setState({
                data
            })
        })
}
    render(){
        return(
            <div className='locations'>
               
                <h1>List of Locations</h1>
                <button type='submit'>Show Locations</button>
            </div>
        )
    }
}

export default Locations