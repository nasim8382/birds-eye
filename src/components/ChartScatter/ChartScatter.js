import React from 'react';
import { CartesianGrid, Legend, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const ChartScatter = () => {
    const [money] = useCharts();
    return (
        <div>
            <h1 className='text-2xl text-center pb-4 text-pink-800'>Sell Vs Investment</h1>
            <ScatterChart width={370} height={250} className="mx-auto">
                <CartesianGrid />
                <XAxis dataKey="sell"/>
                <YAxis dataKey="investment"/>
                <ZAxis type="number" range={[100]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Sell" data={money} fill="crimson" line shape="cross" />
                <Scatter name="investment" data={money} fill="darkslateblue" line shape="diamond" />
            </ScatterChart>
        </div>
    );
};

export default ChartScatter;