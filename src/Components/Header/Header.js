import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>home</Link>
            <Link to='/add'>Add service</Link>
            <Link to='/manage'>Manage service</Link>
        </div>
    );
};

export default Header;