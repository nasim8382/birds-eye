import React from 'react';
import ChartArea from '../ChartArea/ChartArea';
import ChartBarArea from '../ChartBarArea/ChartBarArea';
import ChartBarHeight from '../ChartBarHeight/ChartBarHeight';
import ChartLine from '../ChartLine/ChartLine';
import ChartScatter from '../ChartScatter/ChartScatter';
import MyPieChart from '../MyPieChart/MyPieChart';

const Dashboard = () => {
    return (
        <div className='my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            <ChartLine></ChartLine>
            <ChartArea></ChartArea>
            <ChartBarArea></ChartBarArea>
            <ChartScatter></ChartScatter>
            <ChartBarHeight></ChartBarHeight>
            <MyPieChart></MyPieChart>
        </div>
    );
};

export default Dashboard;