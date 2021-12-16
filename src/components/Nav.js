import { Component } from "react";
import {Link} from "react-router-dom";
import './Nav.css';
// import React from "react";

class Nav extends Component{
    render(){
        return(
           
                
                <nav>
                    <Link to='/'><img id='logo' src='https://cdn-icons-png.flaticon.com/512/1253/1253702.png' alt='serach-logo'/></Link>
                    <ul>
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to ="/movies"> Movies </Link>
                        </li>
                        <li>
                            <Link to ="/people"> People </Link>
                        </li>
                        <li>
                            <Link to="/locations"> Locations</Link>
                        </li>
                    </ul>
                </nav>
           
        )
    }
}

export default Nav;