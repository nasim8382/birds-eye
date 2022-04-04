import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const ChartLine = () => {
    const [money] = useCharts();
    return (
        <LineChart width={800} height={600} data={money}className="mx-auto">
            <Line type="monotone" dataKey='sell' stroke="orange" ></Line>
            <XAxis dataKey='month'></XAxis>
            <YAxis ></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
        </LineChart>
    );
};

export default ChartLine;