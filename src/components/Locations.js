import './Locations.css'
import { Component } from 'react'

import React from "react";

class Locations extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id='locations-display'>
               
                <h1>List of Locations</h1>
                <button type='submit'>Show Locations</button>
            </div>
        )
    }
}

export default Locations