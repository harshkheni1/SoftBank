import React from "react";
import { Line } from 'react-chartjs-2';

function LineGraph() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Balance History',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#2D60FF',
                borderColor: '#2D60FF',
                borderWidth: 3,
                data: [5, 59, 40, 81, 56, 92, 28]
            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: 'Balance History',
            fontSize: 20
        },
        legend: {
            display: true,
            position: 'right'
        }
    };

    return <Line data={data} options={options} />
}

export default LineGraph;