import React from 'react';
import { Link } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa';

function Navbar() {
    return (
        <nav className='navbarStyle'>
            <Link className='navLink' to='/'>
                <h3>Logo</h3>
            </Link>
            <ul className='navList'>
                <Link className='navLink' to='/about'><li >About</li> </Link>
                <Link className='navLink' to='/shop'><li >Shop</li> </Link>
                <li><FaUserAlt size={20}/></li>
            </ul>
        </nav>
    )
};

export default Navbar;