import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/create">Add New Dessert</NavLink>
            </header>
         );
    }
}
 
export default Header;