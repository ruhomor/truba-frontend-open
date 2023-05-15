import './Chart.css'
import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Chart(){
    const data = [
        {
            name: 'Jan',
            PH: 4000,
            TDS: 2400,
            Temperature: 2400,
        },
        {
            name: 'Feb',
            PH: 3000,
            TDS: 1398,
            Temperature: 2210,
        },
        {
            name: 'Mar',
            PH: 2000,
            TDS: 9800,
            Temperature: 2290,
        },
        {
            name: 'Apr',
            PH: 2780,
            TDS: 3908,
            Temperature: 2000,
        },
        {
            name: 'May',
            PH: 1890,
            TDS: 4800,
            Temperature: 2181,
        },
        {
            name: 'Jun',
            PH: 2390,
            TDS: 3800,
            Temperature: 2500,
        },
        {
            name: 'Jul',
            PH: 3490,
            TDS: 4300,
            Temperature: 2100,
        },
        {
            name: 'Aug',
            PH: 3490,
            TDS: 4300,
            Temperature: 2100,
        },{
            name: 'Sep',
            PH: 3490,
            TDS: 4300,
            Temperature: 2100,
        },{
            name: 'Dec',
            PH: 3490,
            TDS: 4300,
            Temperature: 2100,
        },

    ];

    return(
        <div className='chart'>
            <h3 className="chartTitle">Data Analytics</h3>
            <ResponsiveContainer width='100%' aspect={4/1}>
                <LineChart data ={data}>
                    <XAxis dataKey='name' stroke='#5550bd'/>
                    <Line type='monotone' dataKey='PH' stroke='#5550bd'/>
                    <Line type='monotone' dataKey='TDS' stroke='cyan'/>
                    <Line type='monotone' dataKey='Temperature' stroke= 'red'/>
                    <Tooltip/>
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}