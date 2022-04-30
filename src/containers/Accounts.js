import React from "react";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import { Header, SummaryCard, TransactionCard, CardDetailsCard, BarGraph, InvoiceCard } from '../components';

import balanceicon from '../assets/images/balance_yellow.svg';
import incomeicon from '../assets/images/income_blue.svg';
import expenseicon from '../assets/images/expense_pink.svg';
import savingicon from '../assets/images/saving_green.svg';
import renewicon from '../assets/images/renew_green.svg';
import serviceicon from '../assets/images/services_blue.svg';
import userpinkicon from '../assets/images/user_pink.svg';
import appleicon from '../assets/images/apple_green.svg';
import useryellowicon from '../assets/images/user_yellow.svg';
import playstationicon from '../assets/images/playstation_blue.svg';

const lastTransactions = [
    {
        icon: renewicon,
        alt: "renew",
        name: "Spotify Subscription",
        date: "25 Jan 2021",
        category: "Shopping",
        cardNumber: "1234 ****",
        status: "Pending",
        type: "debit",
        amount: "$150"
    },
    {
        icon: serviceicon,
        alt: "service",
        name: "Mobile Service",
        date: "25 Jan 2021",
        category: "Service",
        cardNumber: "1234 ****",
        status: "Completed",
        type: "debit",
        amount: "$340"
    },
    {
        icon: userpinkicon,
        alt: "user",
        name: "Emilly Wilson",
        date: "25 Jan 2021",
        category: "Transfer",
        cardNumber: "1234 ****",
        status: "Completed",
        type: "credit",
        amount: "$780"
    }
];

const invoices = [
    {
        icon: appleicon,
        alt: "apple",
        name: "Apple Store",
        date: "5h ago",
        amount: "$450"
    },
    {
        icon: useryellowicon,
        alt: "user",
        name: "Michael",
        date: "2 days ago",
        amount: "$160"
    },
    {
        icon: playstationicon,
        alt: "playstation",
        name: "Playstation",
        date: "5 days ago",
        amount: "$1,085"
    },
    {
        icon: userpinkicon,
        alt: "user",
        name: "William",
        date: "10 days ago",
        amount: "$90"
    }
];

function Accounts() {
    return (
        <>
            <Header heading="Accouts" />
            <main className="md:ml-[240px] md:mt-20 mt-28">
                <div className="xl:p-10 p-5">
                    <Grid container>
                        <Grid item lg={3} sm={6} xs={12} className="xl:pr-4 sm:pr-2 xl:mb-0 mb-4">
                            <SummaryCard icon={balanceicon} heading="My Balance" subheading="$12,750" />
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12} className="xl:px-2 sm:pl-2 xl:mb-0 mb-4">
                            <SummaryCard icon={incomeicon} heading="Income" subheading="$5,600" />
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12} className="xl:px-2 sm:pr-2 sm:mb-0 mb-4">
                            <SummaryCard icon={expenseicon} heading="Expense" subheading="$3,460" />
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12} className="xl:pl-4 sm:pl-2">
                            <SummaryCard icon={savingicon} heading="Total Saving" subheading="$7,920" />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-8">
                        <Grid item lg={8} md={7} xs={12} className="lg:pr-4 xl:mb-0 mb-4">
                            <h2 className="heading2 text-darkblack mb-2">Last Transactions</h2>
                            <TransactionCard
                                transactions={lastTransactions}
                            />
                        </Grid>
                        <Grid item lg={4} md={5} xs={12} className="lg:pl-4">
                            <div className="flex justify-between">
                                <h2 className="heading2 text-darkblack mb-2">My Cards</h2>
                                <h4 className="heading3 font-semibold darkblack">See All</h4>
                            </div>
                            <CardDetailsCard variant="blue" balance="$5,756" holder="Eddy Cusuma" expiry="12/22" number="3778 **** **** 1234" />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-8">
                        <Grid item lg={8} md={7} xs={12} className="lg:pr-4 lg:mb-0 mb-4">
                            <h2 className="heading2 text-darkblack mb-2">Debit & Credit Overview</h2>
                            <BarGraph />
                        </Grid>
                        <Grid item lg={4} md={5} xs={12} className="lg:pl-4">
                            <h2 className="heading2 text-darkblack mb-2">Invoices Sent</h2>
                            <InvoiceCard invoices={invoices} />
                        </Grid>
                    </Grid>
                </div>
            </main>
        </>
    );
}

export default withRouter(Accounts);