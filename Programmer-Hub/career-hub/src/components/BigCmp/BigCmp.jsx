import React from 'react';
import "./BigCmp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BigCmp = ({ jobs }) => {
    const { id, salary, location, company_name, title, company_logo, remote_or_onsite } = jobs
    return (
        <div className='bigcmp'>
            <img src={company_logo} alt="" />
            <p>{title}</p>
            <p>{company_name}</p>
            <button className='bigcmp-btn1'>{remote_or_onsite[0]}</button><button className='bigcmp-btn2'>{remote_or_onsite[1]}</button>
            <div className='salanddollar'>
                <p><FontAwesomeIcon icon={faLocation} /> Location:{location}</p> <p className='dollar'><FontAwesomeIcon icon={faDollar} /> Salary:{salary}</p>
            </div>
            <Link to={`/job/${id}`}><button className='main-btn'>View Details</button></Link>

        </div>
    );
};

export default BigCmp;