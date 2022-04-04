import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const ChartBarHeight = () => {
    const [money] = useCharts();
    return (
        <div>
            <h1 className='text-2xl text-center pb-4 text-pink-800'>Investment Vs Revenue</h1>
            <BarChart width={370} height={250} data={money} className="mx-auto">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="orange" background={{ fill: '#eee' }} />
                <Bar dataKey="revenue" fill="green" />
            </BarChart>
        </div>
    );
};

export default ChartBarHeight;