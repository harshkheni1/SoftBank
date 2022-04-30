import React from "react";
import { withRouter } from "react-router-dom";

import { Card, CardContent, Grid } from '@material-ui/core';

import { Header, CardDetailsCard, TransactionCard, BarGraph, CircleGraph, PersonCard, ButtonInput, LineGraph } from '../components';

import cards from '../assets/images/cards_yellow.svg';
import paypal from '../assets/images/paypal.svg';
import dollor from '../assets/images/dollor_green.svg';
import user1 from '../assets/images/user1.svg';
import user2 from '../assets/images/user2.svg';
import user3 from '../assets/images/user3.svg';

const recentTransactions = [
    {
        icon: cards,
        alt: "cards",
        name: "Deposit from my Card",
        date: "28 January 2021",
        category: "Transfer",
        cardNumber: "1234 ****",
        status: "Completed",
        type: "debit",
        amount: "$850"
    },
    {
        icon: paypal,
        alt: "paypal",
        name: "Deposit Paypal",
        date: "25 January 2021",
        category: "Transfer",
        cardNumber: "1234 ****",
        status: "Completed",
        type: "credit",
        amount: "$2,500"
    },
    {
        icon: dollor,
        alt: "dollor",
        name: "Jemi Wilson",
        date: "21 January 2021",
        category: "Transfer",
        cardNumber: "1234 ****",
        status: "Completed",
        type: "credit",
        amount: "$5,400"
    }
];

const persons = [
    { icon: user1, alt: 'user1', name: 'Livia Bator', tag: 'CEO' },
    { icon: user2, alt: 'user2', name: 'Randy Press', tag: 'Director' },
    { icon: user3, alt: 'user3', name: 'Workman', tag: 'Designer' },
    { icon: user1, alt: 'user1', name: 'Livia Bator', tag: 'CEO' },
    { icon: user2, alt: 'user2', name: 'Randy Press', tag: 'Director' },
    { icon: user3, alt: 'user3', name: 'Workman', tag: 'Designer' },
    { icon: user1, alt: 'user1', name: 'Livia Bator', tag: 'CEO' },
    { icon: user2, alt: 'user2', name: 'Randy Press', tag: 'Director' },
    { icon: user3, alt: 'user3', name: 'Workman', tag: 'Designer' }
];

function Dashboard() {
    return (
        <>
            <Header heading="Overview" />
            <main className="md:ml-[240px] md:mt-20 mt-28">
                <div className="xl:p-10 p-5">
                    <Grid container>
                        <Grid item lg={8} xs={12} className="xl:pr-3 xl:mb-0 mb-4">
                            <div className="flex justify-between">
                                <h2 className="heading2 text-darkblack mb-2">My Cards</h2>
                                <h4 className="heading3 font-semibold darkblack">See All</h4>
                            </div>
                            <Grid container>
                                <Grid item md={6} xs={12} className="lg:pr-6 lg:mb-0 mb-4">
                                    <CardDetailsCard variant="yellow" balance="$5,756" holder="Eddy Cusuma" expiry="12/22" number="3778 **** **** 1234" />
                                </Grid>
                                <Grid item md={6} xs={12} className="lg:pl-6">
                                    <CardDetailsCard balance="$5,756" holder="Eddy Cusuma" expiry="12/22" number="3778 **** **** 1234" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={4} xs={12} className="xl:pl-3">
                            <h2 className="heading2 text-darkblack mb-2">Recent Transactions</h2>
                            <TransactionCard
                                variant="recent"
                                transactions={recentTransactions}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-8">
                        <Grid item md={8} xs={12} className="lg:pr-3 lg:mb-0 mb-4">
                            <h2 className="heading2 text-darkblack mb-2">Weekly Activity</h2>
                            <BarGraph />
                        </Grid>
                        <Grid item md={4} xs={12} className="lg:pl-3">
                            <h2 className="heading2 text-darkblack mb-2">Expense Statistics</h2>
                            <CircleGraph />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-8">
                        <Grid item md={5} xs={12} className="lg:pr-3 lg:mb-0 mb-4">
                            <h2 className="heading2 text-darkblack mb-2">Quick Transfer</h2>
                            <Card className="shadow-none rounded-[25px]">
                                <CardContent className="sm:p-5 p-3">
                                    <div className="person-list overflow-x-scroll whitespace-nowrap">
                                        {persons && Object.keys(persons).length > 0 ? persons.map((person) => (
                                            <div className="inline-block mr-6">
                                                <PersonCard icon={person.icon} alt={person.alt} name={person.name} tag={person.tag}  />
                                            </div>
                                        )) : <p>No persons</p>}
                                    </div>
                                    <div className="flex justify-between mt-8">
                                        <p className="text-base font-normal text-darkblue my-auto">Write Amount</p>
                                        <ButtonInput fullWidth={false} defaultValue="525.50" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={7} xs={12} className="lg:pl-3">
                            <h2 className="heading2 text-darkblack mb-2">Balance History</h2>
                            <LineGraph />
                        </Grid>
                    </Grid>
                </div>
            </main>
        </>
    );
}

export default withRouter(Dashboard);