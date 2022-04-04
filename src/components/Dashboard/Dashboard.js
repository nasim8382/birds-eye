import React from 'react';
import ChartArea from '../ChartArea/ChartArea';
import ChartBarArea from '../ChartBarArea/ChartBarArea';
import ChartLine from '../ChartLine/ChartLine';
import ChartScatter from '../ChartScatter/ChartScatter';

const Dashboard = () => {
    return (
        <div className='my-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16'>
            <ChartLine></ChartLine>
            <ChartArea></ChartArea>
            <ChartBarArea></ChartBarArea>
            <ChartScatter></ChartScatter>
        </div>
    );
};

export default Dashboard;