import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChartInvestment() {
    const data = {
        labels: [
            '2018',
            '2019',
            '2020',
            '2021',
            '2022',
            '2023,'
        ],
        datasets: [
            {
                label: 'Sales 2020 (M)',
                data: [0, 10000, 2000, 6000, 30000, 20000],
                borderColor: '#FDAA0A',
                backgroundColor: '#FDAA0A',
                pointBackgroundColor: '#FFFFFF',
                pointBorderColor: '#FDAA0A'
            },
            //   {
            //     label: 'Sales 2019 (M)',
            //     data: [1, 3, 2, 2, 3],
            //     borderColor: ['rgba(54, 162, 235, 0.2)'],
            //     backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            //     pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
            //     pointBorderColor: 'rgba(54, 162, 235, 0.2)'
            //   }
        ]
    };

    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 40000,
                        stepSize: 1
                    }
                }
            ]
        },
        plugins: {
            title: {
                display: true,
                text: (ctx) => 'Tooltip point style: ' + ctx.chart.options.plugins.tooltip.usePointStyle,
            },
            tooltip: {
                usePointStyle: true,
            }
        },
        animation: {
            interaction: {
                intersect: true
            },
        }
    };

    return <Line data={data} options={options} />
}

export default LineChartInvestment;