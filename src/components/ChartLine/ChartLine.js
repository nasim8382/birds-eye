import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const ChartLine = () => {
    const [money] = useCharts();
    return (
        <div>
            <h1 className='text-2xl text-center pb-4 text-pink-800'>Month Wise Sell</h1>
            <LineChart width={370} height={250} data={money} className="mx-auto">
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