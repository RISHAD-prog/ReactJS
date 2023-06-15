import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header-title'>ProgrammerHub</h1>
            <div className='nav-link'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/jobapp'>Applied Job</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <button className='header-btn'>Start Applying</button>
        </div>
    );
};

export default Header;