import React from 'react';
import "./Application.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Application = ({ details, types }) => {
    const { id, company_logo, company_name, title, remote_or_onsite, location, salary } = details;
    let jobtype;
    let alltype;
    if (remote_or_onsite[0] === types || remote_or_onsite[1] === types) {
        jobtype = <div className='application'>
            <img src={company_logo} alt="" />
            <div className='app-details'>
                <div>
                    <p>{title}</p>
                    <p>{company_name}</p>
                    <button className='location1'>{remote_or_onsite[0]}</button><button className='location2'>{remote_or_onsite[1]}</button>
                    <div className='salanddollar'>
                        <p className=''><FontAwesomeIcon icon={faLocation} /> Location:{location}</p> <p className=''><FontAwesomeIcon icon={faDollar} /> Salary:{salary}</p>
                    </div>
                </div>
                <Link to={`/job/${id}`}><button className=''>View Details</button></Link>
            </div>
        </div>;
    }
    else if (types === "") {
        alltype = <div className='application'>
            <img src={company_logo} alt="" />
            <div className='app-details'>
                <div>
                    <p>{title}</p>
                    <p>{company_name}</p>
                    <button className='location1'>{remote_or_onsite[0]}</button><button className='location2'>{remote_or_onsite[1]}</button>
                    <div className='salanddollar'>
                        <p className=''><FontAwesomeIcon icon={faLocation} /> Location:{location}</p> <p className=''><FontAwesomeIcon icon={faDollar} /> Salary:{salary}</p>
                    </div>
                </div>
                <Link to={`/job/${id}`}><button className=''>View Details</button></Link>
            </div>
        </div>;
    }
    return (
        <div >
            {jobtype}
            {alltype}
        </div>
    );
};

export default Application;