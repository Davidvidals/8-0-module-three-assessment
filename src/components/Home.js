import './Home.css'; 
import { Component } from "react";
import React from 'react';
import { Link } from 'react-router-dom';


class Home extends Component{
    constructor(){
        super();
    }

    render(){
    return(
        <div id='home-display'>
           
            <h1>Welcome to GhibliApp</h1>
        </div>
        
    )
    }
}

export default Home;