import React from 'react';
// import {Link} from 'react-router-dom';
import '../styles/Nav.scss';
function Nav(){
    return(
        <nav>
            <div className="nav-logo">
                <h2 id="logo" >LOGO</h2>
            </div>
            <div className="nav-links">
                <ul>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>CUSTOMIZE</li>
                    <li>FAVORITES</li>
                </ul>
            </div>
            <div className="cart">
                <button>CART</button>
            </div>
        </nav>
       
    )
}
export default Nav;