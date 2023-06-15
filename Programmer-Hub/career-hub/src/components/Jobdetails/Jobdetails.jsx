import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./Jobdetails.css"
import { addToDb } from '../../utilities/fakedb';

const Jobdetails = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState([]);
    useEffect(() => {
        fetch('/job_available.json')
            .then(res => res.json())
            .then(data => setJob(data.find(item => item.id === jobId)))
    }, [])
    const addToLocal = (appId) => {
        addToDb(appId);
    }
    return (
        <div>
            <div className='jb-title'>
                <h1>Job Details</h1>
            </div>

            <div className='jb-des'>
                <div className='jb-res'>
                    <p><span>Job Description:</span>  {job.description}</p>
                    <p><span> Job Responsibility:</span> {job.responsibilities}</p>
                    <p><span>Educational Requirements:</span>  {job.educational_requirements}</p>
                    <p><span>Experience:</span>  {job.experiences}</p>
                </div>
                <div className='jb-type'>
                    <h1>Job details</h1>
                    <hr />
                    <p>Salary: {job.salary} per month</p>
                    <p>Job Tile:{job.title}</p>
                    <h1>Contact Info</h1>
                    <hr />
                    <p>Phone: {job.phone}</p>
                    <p>Email: {job.email}</p>
                    <p>Address: {job.location}</p>
                    <button onClick={() => addToLocal(job.id)} className='jb-btn'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;