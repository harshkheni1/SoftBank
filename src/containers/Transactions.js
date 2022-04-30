import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { AppBar, Tabs, Tab, Grid } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import { Header, BarGraph, CardDetailsCard, TransactionTable } from '../components';

function Transactions() {
    const [tabIndex, setTabIndex] = useState(0);

    const transactionsTabs = [
        {
            name: 'All Transactions'
        },
        {
            name: 'Income'
        },
        {
            name: 'Expense'
        }
    ];

    const transactions = [
        { description: 'Spotify Subscription', transactionID: '#12548796', category: 'Shopping', cardNumber: '1234 ****', date: '28 Jan, 12.30 AM', type: 'debit', amount: '$2,500' },
        { description: 'Freepik Sales', transactionID: '#12548796', category: 'Transfer', cardNumber: '1234 ****', date: '25 Jan, 10.40 PM', type: 'credit', amount: '$750' },
        { description: 'Mobile Service', transactionID: '#12548796', category: 'Service', cardNumber: '1234 ****', date: '20 Jan, 10.40 PM', type: 'debit', amount: '$150' },
        { description: 'Wilson', transactionID: '#12548796', category: 'Transfer', cardNumber: '1234 ****', date: '15 Jan, 03.29 PM', type: 'debit', amount: '$1050' },
        { description: 'Emilly', transactionID: '#12548796', category: 'Transfer', cardNumber: '1234 ****', date: '14 Jan, 10.40 PM', type: 'credit', amount: '$840' },
        { description: 'Mobile Service', transactionID: '#12548796', category: 'Service', cardNumber: '1234 ****', date: '20 Jan, 10.40 PM', type: 'debit', amount: '$150' },
        { description: 'Emilly', transactionID: '#12548796', category: 'Transfer', cardNumber: '1234 ****', date: '14 Jan, 10.40 PM', type: 'credit', amount: '$840' },
        { description: 'Freepik Sales', transactionID: '#12548796', category: 'Transfer', cardNumber: '1234 ****', date: '25 Jan, 10.40 PM', type: 'credit', amount: '$750' },        
        { description: 'Wilson', transactionID: '#12548796', category: 'Transfer', cardNumber: '1234 ****', date: '15 Jan, 03.29 PM', type: 'debit', amount: '$1050' },
        { description: 'Spotify Subscription', transactionID: '#12548796', category: 'Shopping', cardNumber: '1234 ****', date: '28 Jan, 12.30 AM', type: 'debit', amount: '$2,500' },
        { description: 'Emilly', transactionID: '#12548796', category: 'Transfer', cardNumber: '1234 ****', date: '14 Jan, 10.40 PM', type: 'credit', amount: '$840' },
        { description: 'Mobile Service', transactionID: '#12548796', category: 'Service', cardNumber: '1234 ****', date: '20 Jan, 10.40 PM', type: 'debit', amount: '$150' },
        { description: 'Freepik Sales', transactionID: '#12548796', category: 'Transfer', cardNumber: '1234 ****', date: '25 Jan, 10.40 PM', type: 'credit', amount: '$750' },
    ];

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };

    const handleViewChangeIndex = (index) => {
        setTabIndex(index);
    };

    return (
        <>
            <Header heading="Transactions" />
            <main className="md:ml-[240px] md:mt-20 mt-28">
                <div className="xl:p-10 p-5">
                    <Grid container>
                        <Grid item lg={8} xs={12} className="xl:pr-3 xl:mb-0 mb-4">
                            <div className="flex justify-between">
                                <h2 className="heading2 text-darkblack mb-2">My Cards</h2>
                                <h4 className="heading3 font-semibold darkblack">+ Add Card</h4>
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
                            <h2 className="heading2 text-darkblack mb-2">My Expenses</h2>
                            <BarGraph className="w-full" />
                        </Grid>
                    </Grid>
                    <div className="mt-8">
                        <h2 className="heading2 text-darkblack mb-2">Recent Transactions</h2>
                        <AppBar position="static" className="bg-transparent text-darkblue border-b border-offwhite3 shadow-none mb-4">
                            <Tabs className="nav-tabs" value={tabIndex} onChange={handleTabChange} variant="scrollable" scrollButtons="off" aria-label="transactions tabs">
                                {transactionsTabs && Object.keys(transactionsTabs).length > 0 && transactionsTabs.map((tt) => (
                                    <Tab label={tt && tt.name} className="capitalize opacity-100 md:text-base text-sm" />
                                ))}
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis='x'
                            index={tabIndex}
                            onChangeIndex={handleViewChangeIndex}
                        >
                            <div
                                role="tabpanel"
                                hidden={tabIndex !== 0}
                                aria-labelledby="transactions-all"
                            >
                                <TransactionTable transactions={transactions} />
                            </div>
                            <div
                                role="tabpanel"
                                hidden={tabIndex !== 1}
                                aria-labelledby="transactions-income"
                            >
                                <TransactionTable transactions={transactions.filter((transaction) => { return transaction.type === 'credit'; })} />
                            </div>
                            <div
                                role="tabpanel"
                                hidden={tabIndex !== 2}
                                aria-labelledby="transactions-expense"
                            >
                                <TransactionTable transactions={transactions.filter((transaction) => { return transaction.type === 'debit'; })} />
                            </div>
                        </SwipeableViews>
                    </div>
                </div>
            </main>
        </>
    );
}

export default withRouter(Transactions);