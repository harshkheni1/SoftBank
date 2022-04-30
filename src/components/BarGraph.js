import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent } from "@material-ui/core";

function BarGraph() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jan', 'Feb', 'Mar', 'April', 'May'],
        datasets: [
            {
                label: 'Sales 2020 (M)',
                data: [3, 2, 2, 6, 4, 3, 2, 2, 6, 4],
                borderColor: [
                    '#FF82AC'
                ],
                backgroundColor: [
                    '#FF82AC'
                ],
                borderWidth: 2,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
            },
            {
                label: 'Sales 2019 (M)',
                data: [4, 3, 2, 2, 3, 4, 3, 2, 2, 3],
                borderColor: [
                    '#16DBCC'
                ],
                backgroundColor: [
                    '#16DBCC'
                ],
                borderWidth: 2,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
            }
        ]
    };

    const options = {
        responsive: true,
        title: {
            display: true,
            text: 'Bar Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <Card className="shadow-none rounded-[25px]">
            <CardContent className="p-0 md:p-3">
                <Bar data={data} options={options} />
            </CardContent>
        </Card>
    );
}

export default BarGraph;