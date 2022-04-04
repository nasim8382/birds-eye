import React from 'react';
import { CartesianGrid, Legend, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const ChartScatter = () => {
    const [money] = useCharts();
    return (
        <div>
            <h1 className='text-3xl text-center pb-4 text-teal-600'>Sell Vs Investment</h1>
            <ScatterChart width={600} height={400} className="mx-auto">
                <CartesianGrid />
                <XAxis dataKey="sell"/>
                <YAxis dataKey="investment"/>
                <ZAxis type="number" range={[100]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Sell" data={money} fill="#8884d8" line shape="cross" />
                <Scatter name="investment" data={money} fill="#82ca9d" line shape="diamond" />
            </ScatterChart>
        </div>
    );
};

export default ChartScatter;