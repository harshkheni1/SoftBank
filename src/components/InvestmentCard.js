import React from "react";
import PropTypes from 'prop-types';

import { Card, CardContent, Grid } from "@material-ui/core";

import { renderReturnPercentage } from '../utils/helpers';

function InvestmentCard({ investments=[] }) {
    return (
        <>
            {investments && Object.keys(investments).length > 0 ? investments.map((investment, index) => (
                <Card className="shadow-none rounded-[25px] mb-5">
                    <CardContent className="p-5">
                        <Grid container>
                            <Grid item sm={6} xs={10}>
                                <div className="flex">
                                    <img src={investment.icon} alt={investment.alt} />
                                    <div className="ml-5 my-auto">
                                        <h4 className="text-base font-medium text-lightblack">{investment.name}</h4>
                                        <h5 className="text-sm font-normal text-darkblue">{investment.tags}</h5>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item sm={3} className="md:block hidden">
                                <h4 className="text-base font-medium text-lightblack">{investment.amount}</h4>
                                <h5 className="text-sm font-normal text-darkblue">Envestment Value</h5>
                            </Grid>
                            <Grid item sm={3} xs={2} className="md:mt-0 my-auto">
                                <h4 className="text-base font-medium">{renderReturnPercentage(investment.position, investment.returnPercentage)}</h4>
                                <h5 className="text-sm font-normal text-darkblue md:block hidden">Return Value</h5>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )) : <p>No Investments</p>}
        </>
    );
}

InvestmentCard.propTypes = {
    investments: PropTypes.array,
}

export default InvestmentCard;