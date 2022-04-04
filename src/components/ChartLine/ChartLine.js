import React from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const ChartLine = () => {
    const [money] = useCharts();
    return (
        <div>
            <h1 className='text-3xl text-center pb-4 text-teal-600'>Month Wise Sell</h1>
            <LineChart width={600} height={400} data={money} className="mx-auto">
                <Line type="monotone" dataKey='sell' stroke="orange" ></Line>
                <XAxis dataKey='month'></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </LineChart>
        </div>
    );
};

export default ChartLine;