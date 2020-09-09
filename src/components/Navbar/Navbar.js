// Import React
import React from 'react';

import Login from '../Login/Login';

// Import style of component Navbar
import './style/Navbar.css';

const Navbar = ()=>{
    return(
        <div className='Navbar'>
            <div className='logoContainer'>
                <h2>Pulpi <span>Timer</span></h2>
            </div>
            <div className='loginWrap'>
                <Login />
            </div>
        </div>
    );
}

export default Navbar; 