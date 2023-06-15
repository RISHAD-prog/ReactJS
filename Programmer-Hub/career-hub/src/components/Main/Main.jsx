import React, { useEffect, useState } from 'react';
import './Main.css';
import { useLoaderData } from 'react-router-dom';
import Job from '../Jobs/Job';
import BigCmp from '../BigCmp/BigCmp';

const Main = () => {
    const jobs = useLoaderData();
    const [cmpjob, setCmpjob] = useState([]);
    useEffect(() => {
        fetch('job_available.json')
            .then(res => res.json())
            .then(data => {
                document.getElementById('see_job').addEventListener('click', () => {
                    setCmpjob(data.slice(4,))
                });
                setCmpjob(data.slice(0, 4))

            })
    }, [])

    return (
        <div>
            <div className='main'>
                <div className='main-description'>
                    <h1>One Step Closer To Your <span className='main-span'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future.
                        Come find it. Manage all your job application from start to finish.</p>
                    <button className='main-btn'>Get started</button>
                </div>
                <img src="user.png" alt="" />
            </div>
            <div className='job-cat-des'>
                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='job-section'>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div>
                <h1>Feature Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='big_jobs'>
                {
                    cmpjob.map(job =>
                        <BigCmp
                            key={job.id}
                            jobs={job}
                        ></BigCmp>
                    )
                }
            </div>
            <button id='see_job' className='feature-btn'>See all Jobs</button>
        </div>

    );
};

export default Main;