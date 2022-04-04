import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const ChartArea = () => {
    const [money] = useCharts();
    return (
        <AreaChart width={800} height={600} data={money} className="mx-auto">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
             <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
    );
};

export default ChartArea;