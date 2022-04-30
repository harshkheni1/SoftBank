import React from "react";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import { Header, SummaryCard, LineGraph, InvestmentCard, StockTable, LineChartInvestment } from '../components';

import balanceicon from '../assets/images/balance_green.svg';
import investmenticon from '../assets/images/investment_pink.svg';
import rateicon from '../assets/images/rate_blue.svg';
import appleicon from '../assets/images/apple_pink.svg';
import googleicon from '../assets/images/google_blue.svg';
import teslaicon from '../assets/images/tesla_yellow.svg';

const investments = [
    {
        icon: appleicon,
        alt: "apple",
        name: "Apple Store",
        tags: "E-commerce, Marketplace",
        amount: "$54,000",
        position: "up",
        returnPercentage: "16%"
    },
    {
        icon: googleicon,
        alt: "google",
        name: "Samsung Mobile",
        tags: "E-commerce, Marketplace",
        amount: "$25,300",
        position: "down",
        returnPercentage: "4%"
    },
    {
        icon: teslaicon,
        alt: "tesla",
        name: "Tesla Motors",
        tags: "Electric Vehicles",
        amount: "$8,200",
        position: "up",
        returnPercentage: "25%"
    }
]

const stocks = [
    {
        slNo: '01.',
        name: 'Trivago',
        price: '$520',
        position: 'up',
        returnPercentage: '5%'
    },
    {
        slNo: '02.',
        name: 'Canon',
        price: '$480',
        position: 'up',
        returnPercentage: '10%'
    },
    {
        slNo: '03.',
        name: 'Uber Food',
        price: '$350',
        position: 'down',
        returnPercentage: '3%'
    },
    {
        slNo: '04.',
        name: 'Nokia',
        price: '$940',
        position: 'up',
        returnPercentage: '2%'
    },
    {
        slNo: '05.',
        name: 'Tiktok',
        price: '$670',
        position: 'down',
        returnPercentage: '12%'
    }
]

function Investments() {
    return (
        <>
            <Header heading="Investments" />
            <main className="md:ml-[240px] md:mt-20 mt-28">
                <div className="xl:p-10 p-5">
                    <Grid container>
                        <Grid item md={4} xs={12} className="lg:pr-4 lg:mb-0 mb-4">
                            <SummaryCard icon={balanceicon} heading="Total Invested Amount" subheading="$150,000" />
                        </Grid>
                        <Grid item md={4} xs={12} className="lg:px-2 lg:mb-0 mb-4">
                            <SummaryCard icon={investmenticon} heading="Number of Investments" subheading="1,250" />
                        </Grid>
                        <Grid item md={4} xs={12} className="lg:pl-4 lg:mb-0 mb-4">
                            <SummaryCard icon={rateicon} heading="Rate of Return" subheading="+5.80%" />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-8">
                        <Grid item lg={6} xs={12} className="xl:pr-4 xl:mb-0 mb-4">
                            <h2 className="heading2 text-darkblack mb-2">Yearly Total Investment</h2>
                            <LineChartInvestment />
                        </Grid>
                        <Grid item lg={6} xs={12} className="xl:pl-4">
                            <h2 className="heading2 text-darkblack mb-2">Monthly Revenue</h2>
                            <LineGraph />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-8">
                        <Grid item lg={7} xs={12} className="xl:pr-4 xl:mb-0 mb-4">
                            <h2 className="heading2 text-darkblack mb-2">My Investment</h2>
                            <InvestmentCard investments={investments} />
                        </Grid>
                        <Grid item lg={5} xs={12} className="xl:pl-4">
                            <h2 className="heading2 text-darkblack mb-2">Trending Stock</h2>
                            <StockTable stocks={stocks} />
                        </Grid>
                    </Grid>
                </div>
            </main>
        </>
    );
}

export default withRouter(Investments);