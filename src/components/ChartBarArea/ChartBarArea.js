import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const ChartBarArea = () => {
    const [money] = useCharts();
    return (
        <div>
          <h1 className='text-2xl text-center pb-4 text-pink-800'>Revenue Vs Investment</h1>
          <ComposedChart width={370} height={250} data={money} className="mx-auto">
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="month" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="investment" barSize={20} fill="blueviolet" />
          </ComposedChart>
        </div>
    );
};

export default ChartBarArea;