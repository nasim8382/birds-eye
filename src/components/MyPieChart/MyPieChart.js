import React from 'react';
import { Pie, PieChart } from 'recharts';
import useCharts from '../../hooks/useCharts';

const MyPieChart = () => {
    const [money] = useCharts();
    return (
        <PieChart width={370} height={370} className="mx-auto">
            <Pie data={money} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="indigo" />
            <Pie data={money} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="hotpink" label />
        </PieChart>
    );
};

export default MyPieChart;