import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const ChartBarArea = () => {
    const [money] = useCharts();
    return (
        <ComposedChart width={800} height={600} data={money} className="mx-auto">
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="investment" barSize={20} fill="blueviolet" />
        </ComposedChart>
    );
};

export default ChartBarArea;