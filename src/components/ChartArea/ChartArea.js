import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const ChartArea = () => {
    const [money] = useCharts();
    return (
        <div>
            <h1 className='text-2xl text-center pb-4 text-pink-800'>Investment Vs Revenue</h1>
            <AreaChart width={370} height={250} data={money} className="mx-auto ">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="lightsalmon" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="lightseagreen" />
            </AreaChart>
        </div>
    );
};

export default ChartArea;