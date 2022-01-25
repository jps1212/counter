import React, { Component } from 'react';

// This is Classless Functional Component

const NavBar = ({totalCounters}) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
        );
};
 
export default NavBar;