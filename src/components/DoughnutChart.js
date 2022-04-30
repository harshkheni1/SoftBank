import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart() {
    const data = {
        labels: ['DBL Bank', 'BRC Bank', 'ABM Bank', 'MCP Bank'],
        datasets: [
            {
                label: 'Sales 2020 (M)',
                data: [3, 2, 2, 4],
                backgroundColor: [
                    '#4C78FF',
                    '#16DBCC',
                    '#FF82AC',
                    '#FFBB38',
                ]
            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: 'Doughnut Chart'
        }
    };

    return <Doughnut data={data} options={options} />
}

export default DoughnutChart;