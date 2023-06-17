import React from 'react';
import "./Navbar.css";
const Navbar = () => {
    return (

        <div className='navbar'>
            <h2>Knowledge Cafe</h2>
            <div className='navlink'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#blogs">Blogs</a>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className='navlink-img' alt="" />
            </div>

        </div>


    );
};

export default Navbar;