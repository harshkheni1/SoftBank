import React from 'react';
import { Pie } from 'react-chartjs-2';

function CircleGraph() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May'],
        datasets: [
            {
                label: 'Sales 2020 (M)',
                data: [25, 15, 20, 30, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)'
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

    return <Pie data={data} options={options} />
}

export default CircleGraph;