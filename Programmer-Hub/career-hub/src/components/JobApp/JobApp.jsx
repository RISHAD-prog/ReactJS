import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./JobApp.css";
import Application from '../Application/Application';
const JobApp = () => {
    const data = useLoaderData();
    const [type, setType] = useState("");
    const jobType = (event) => {
        setType(event.target.value);
    }
    return (
        <div>
            <div className='app-job'>
                <h1>Application list</h1>
            </div>

            <div className='app-items'>
                <select onChange={jobType} name="filter-by" id="job-type">
                    <option value="">Filter By</option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">onsite</option>
                </select>
                {
                    data.map(detail => <Application
                        key={detail.id}
                        details={detail}
                        types={type}
                    ></Application>)
                }
            </div>
        </div >
    );
};

export default JobApp;