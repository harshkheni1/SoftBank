import React from "react";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import { Header, SummaryCard, ServiceCard } from '../components';

import insuranceicon from '../assets/images/insurance_blue.svg';
import bagicon from '../assets/images/bag_yellow.svg';
import shieldicon from '../assets/images/shield_green.svg';

const services = [
    {
        icon: insuranceicon,
        alt: 'insurance',
        name: 'Business loans',
        description: 'It is a long established ',
        value1: 'Lorem Ipsum',
        value2: 'Lorem Ipsum',
        value3: 'Lorem Ipsum'
    },
    {
        icon: bagicon,
        alt: 'bag',
        name: 'Checking accounts',
        description: 'It is a long established ',
        value1: 'Lorem Ipsum',
        value2: 'Lorem Ipsum',
        value3: 'Lorem Ipsum'
    },
    {
        icon: shieldicon,
        alt: 'shield',
        name: 'Savings accounts',
        description: 'It is a long established ',
        value1: 'Lorem Ipsum',
        value2: 'Lorem Ipsum',
        value3: 'Lorem Ipsum'
    },
    {
        icon: insuranceicon,
        alt: 'insurance',
        name: 'Debit and credit cards',
        description: 'It is a long established ',
        value1: 'Lorem Ipsum',
        value2: 'Lorem Ipsum',
        value3: 'Lorem Ipsum'
    },
    {
        icon: bagicon,
        alt: 'bag',
        name: 'Life Insurance',
        description: 'It is a long established ',
        value1: 'Lorem Ipsum',
        value2: 'Lorem Ipsum',
        value3: 'Lorem Ipsum'
    },
    {
        icon: shieldicon,
        alt: 'shield',
        name: 'Business loans',
        description: 'It is a long established ',
        value1: 'Lorem Ipsum',
        value2: 'Lorem Ipsum',
        value3: 'Lorem Ipsum'
    }
];

function Services() {
    return (
        <>
            <Header heading="Services" />
            <main className="md:ml-[240px] md:mt-20 mt-28">
                <div className="xl:p-10 p-5">
                    <Grid container>
                        <Grid item md={4} xs={12} className="2xl:pr-4 lg:pr-2 lg:mb-0 mb-3">
                            <SummaryCard variant="reverse" icon={insuranceicon} heading="Life Insurance" subheading="Unlimited protection" />
                        </Grid>
                        <Grid item md={4} xs={12} className="2xl:px-2 lg:px-2 lg:mb-0 mb-3">
                            <SummaryCard variant="reverse" icon={bagicon} heading="Shopping" subheading="Buy. Think. Grow" />
                        </Grid>
                        <Grid item md={4} xs={12} className="2xl:pl-4 lg:pl-2 lg:mb-0 mb-3">
                            <SummaryCard variant="reverse" icon={shieldicon} heading="Safety" subheading="We are your allies" />
                        </Grid>
                    </Grid>
                    <div className="mt-8">
                        <h2 className="heading2 text-darkblack mb-2">Bank Services List</h2>
                        <ServiceCard services={services} />
                    </div>    
                </div>
            </main>
        </>
    );
}

export default withRouter(Services);