import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { Grid, Card, CardContent } from "@material-ui/core";

import { Header, CardDetailsCard, DoughnutChart, CardListCard, CustomInput, CustomDatepicker, CustomButton, CardSettingCard } from '../components';

import cardpinkicon from '../assets/images/card_pink.svg';
import cardyellowicon from '../assets/images/card_yellow.svg';
import cardblueicon from '../assets/images/card_blue.svg';
import cardblockicon from '../assets/images/card_block_yellow.svg';
import lockicon from '../assets/images/lock_blue.svg';
import googleicon from '../assets/images/google_blue.svg';
import appleicon from '../assets/images/apple_green.svg';

const cards = [
    {
        icon: cardpinkicon,
        alt: 'card',
        type: 'Secondary',
        bank: 'DBL Bank',
        cardNumber: '**** **** 5600',
        holderName: 'William'
    },
    {
        icon: cardyellowicon,
        alt: 'card',
        type: 'Secondary',
        bank: 'BRC Bank',
        cardNumber: '**** **** 4300',
        holderName: 'Michel'
    },
    {
        icon: cardblueicon,
        alt: 'card',
        type: 'Secondary',
        bank: 'ABM Bank',
        cardNumber: '**** **** 7850',
        holderName: 'Edward'
    }
];

const settings = [
    {
        icon: cardblockicon,
        alt: 'card block',
        name: 'Block Card',
        description: 'Instantly block your card'
    },
    {
        icon: lockicon,
        alt: 'lock',
        name: 'Change Pin Code',
        description: 'Choose another pin code'
    },
    {
        icon: googleicon,
        alt: 'google',
        name: 'Add to Google Pay',
        description: 'Withdraw without any card'
    },
    {
        icon: appleicon,
        alt: 'apple',
        name: 'Add to Apple Pay',
        description: 'Withdraw without any card'
    },
    {
        icon: appleicon,
        alt: 'apple',
        name: 'Add to Apple Store',
        description: 'Withdraw without any card'
    }
]

function CreditCards() {
    const [expiryDate, setExpiryDate] = useState(new Date("25 January 2025"));

    return (
        <>
            <Header heading="Credit Cards" />
            <main className="md:ml-[240px] md:mt-20 mt-28">
                <div className="xl:p-10 p-5">
                    <h2 className="heading2 text-darkblack mb-2">My Cards</h2>
                    <Grid container>
                        <Grid item lg={4} md={6} xs={12} className="xl:pr-6 lg:pr-3 xl:mb-0 mb-4">
                            <CardDetailsCard variant="blue" balance="$5,756" holder="Eddy Cusuma" expiry="12/22" number="3778 **** **** 1234" />
                        </Grid>
                        <Grid item lg={4} md={6} xs={12} className="xl:px-3 lg:pl-3 xl:mb-0 mb-4">
                            <CardDetailsCard variant="yellow" balance="$5,756" holder="Eddy Cusuma" expiry="12/22" number="3778 **** **** 1234" />
                        </Grid>
                        <Grid item lg={4} md={6} xs={12} className="xl:pl-6 xl:pr-0 lg:pr-3"> 
                            <CardDetailsCard balance="$5,756" holder="Eddy Cusuma" expiry="12/22" number="3778 **** **** 1234" />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-8">
                        <Grid item lg={4} xs={12} className="xl:pr-4 xl:mb-0 mb-4">
                            <h2 className="heading2 text-darkblack mb-2">Card Expense Statistics</h2>
                            <DoughnutChart />
                        </Grid>
                        <Grid item lg={8} xs={12} className="xl:pl-4">
                            <h2 className="heading2 text-darkblack mb-2">Card List</h2>
                            <CardListCard cards={cards} />
                        </Grid>
                    </Grid>
                    <Grid container className="mt-8">
                        <Grid item lg={8} md={7} xs={12} className="lg:pr-4 lg:mb-0 mb-4">
                            <h2 className="heading2 text-darkblack mb-2">Add New Card</h2>
                            <Card className="shadow-none rounded-[25px]">
                                <CardContent className="2xl:p-8 sm:p-6 p-4">
                                    <p className="text-base font-normal text-darkblue mb-2">Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.</p>
                                    <form noValidate autoComplete="off">
                                        <Grid container>
                                            <Grid item lg={6} xs={12} className="xl:pr-4">
                                                <div className="py-2">
                                                    <p className="body1 text-lightblack mb-2">Card Type</p>
                                                    <CustomInput defaultValue="Classic" />
                                                </div>
                                            </Grid>
                                            <Grid item lg={6} xs={12} className="xl:pl-4">
                                                <div className="py-2">
                                                    <p className="body1 text-lightblack mb-2">Name On Card</p>
                                                    <CustomInput defaultValue="My Cards" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item lg={6} xs={12} className="xl:pr-4">
                                                <div className="py-2">
                                                    <p className="body1 text-lightblack mb-2">Card Number</p>
                                                    <CustomInput type="password" defaultValue="1234 5678 9012 3456" />
                                                </div>
                                            </Grid>
                                            <Grid item lg={6} xs={12} className="xl:pl-4">
                                                <div className="py-2">
                                                    <p className="body1 text-lightblack mb-2">Expiry Date</p>
                                                    <CustomDatepicker value={expiryDate} onChange={setExpiryDate} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <div className="pt-4">
                                            <CustomButton label="Add Card" />
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={4} md={5} xs={12} className="lg:pl-4">
                            <h2 className="heading2 text-darkblack mb-2">Card Settings</h2>
                            <CardSettingCard settings={settings} />
                        </Grid>
                    </Grid>
                </div>
            </main>
        </>
    );
}

export default withRouter(CreditCards);