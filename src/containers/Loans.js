import React from "react";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import { Header, SummaryCard, LoanTable } from '../components';

import personalicon from '../assets/images/services_green.svg';
import corporateicon from '../assets/images/chart_pink.svg';
import businessicon from '../assets/images/briefcase_yellow.svg';
import usericon from '../assets/images/user_blue.svg';

const activeloans = [
    { slNo: '01.', amount: '$100,000', left: '$40,500', duration: '8 Months', interest: '12%', installment: '$2,000 / month' },
    { slNo: '02.', amount: '$500,000', left: '$250,000', duration: '36 Months', interest: '10%', installment: '$8,000 / month' },
    { slNo: '03.', amount: '$900,000', left: '$40,500', duration: '12 Months', interest: '12%', installment: '$5,000 / month' },
    { slNo: '04.', amount: '$50,000', left: '$40,500', duration: '25 Months', interest: '5%', installment: '$2,000 / month' },
    { slNo: '05.', amount: '$50,000', left: '$40,500', duration: '5 Months', interest: '16%', installment: '$10,000 / month' },
    { slNo: '06.', amount: '$80,000', left: '$25,500', duration: '14 Months', interest: '8%', installment: '$2,000 / month' },
    { slNo: '07.', amount: '$12,000', left: '$5,500', duration: '9 Months', interest: '13%', installment: '$500 / month' },
    { slNo: '08.', amount: '$160,000', left: '$100,800', duration: '3 Months', interest: '12%', installment: '$900 / month' }
];

function Loans() {
    return (
        <>
            <Header heading="Loans" />
            <main className="md:ml-[240px] md:mt-20 mt-28">
                <div className="xl:p-10 p-5">
                    <Grid container>
                        <Grid item lg={3} sm={6} xs={12} className="xl:pr-4 sm:pr-2 xl:mb-0 mb-4">
                            <SummaryCard icon={personalicon} alt="personal" heading="Personal Loans" subheading="$12,750" />
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12} className="xl:px-2 sm:pl-2 xl:mb-0 mb-4">
                            <SummaryCard icon={corporateicon} alt="corporate" heading="Corporate Loans" subheading="$100,000" />
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12} className="xl:px-2 sm:pr-2 sm:mb-0 mb-4">
                            <SummaryCard icon={businessicon} alt="business" heading="Business Loans" subheading="$500,000" />
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12} className="xl:pl-4 sm:pl-2">
                            <SummaryCard icon={usericon} alt="custom" heading="Custom Loans" subheading="$7,920" />
                        </Grid>
                    </Grid>
                    <div className="mt-8">
                        <h2 className="heading2 text-darkblack mb-2">Active Loans Overview</h2>
                        <LoanTable loans={activeloans} />
                    </div>
                </div>
            </main>
        </>
    );
}

export default withRouter(Loans);