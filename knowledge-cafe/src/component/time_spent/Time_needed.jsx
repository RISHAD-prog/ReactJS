import React from 'react';
import './Time_needed.css'
const Time_needed = (props) => {

    let total_time = 0;

    for (const blog of props.Time) {
        total_time = blog.read_time + total_time;
    }
    return (
        <div className='timeSpent'>
            <p>Spends Time on read:{total_time} min</p>
        </div>
    );
};

export default Time_needed;