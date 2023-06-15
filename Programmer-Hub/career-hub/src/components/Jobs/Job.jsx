import React from 'react';
import "./Job.css"
const Job = ({ job }) => {
    return (
        <div className='job'>
            <img src={job.logo} alt="" />
            <h1 className='job-name'>{job.name}</h1>
            <p className='job-available'>{job.available}+jobs Available</p>
        </div>
    );
};

export default Job;