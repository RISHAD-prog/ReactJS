import React from 'react';
import './Statistics.css'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    const data = [
        {
            name: 'Assignment-1',
            marks: 60,

        },
        {
            name: 'Assignment-2',
            marks: 60,

        },
        {
            name: 'Assignment-3',
            marks: 55,

        },
        {
            name: 'Assignment-4',
            marks: 49,

        },
        {
            name: 'Assignment-5',
            marks: 39,

        },
        {
            name: 'Assignment-6',
            marks: 27,
        },
        {
            name: 'Assignment-7',
            marks: 60,
        },
        {
            name: 'Assignment-8',
            marks: 60,
        }

    ];


    return (
        <div className='chart'>

            <div className='app-job'>
                <h1>Assignment Details</h1>
            </div>
            <div className='graph'>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="marks" stroke="#ff7300" />
                </ComposedChart>
            </div>

        </div>
    );
};

export default Statistics;