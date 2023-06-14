import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='d-flex align-items-center bg-danger text-white fixed-bottom' style={{ opacity: "0.9" }} >
            <h6 style={{ paddingLeft: "130px" }} className='flex-grow-1 ms-5'>@copyright of my foodverse</h6>
            <div className='px-5' style={{ padding: "20px" }} >
                <Link className='text-decoration-none me-2 text-white' to="/terms" >Terms of use</Link>
                <Link className='text-decoration-none me-2 text-white' to="/privacy" >Privacy Policy</Link>
                <Link className='text-decoration-none me-2 text-white' to="/cookie" >Cookie Policy</Link>
            </div>

        </div>
    );
};

export default Footer;