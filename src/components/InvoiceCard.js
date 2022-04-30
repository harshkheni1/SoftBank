import React from "react";
import PropTypes from 'prop-types';

import { Card, CardContent, Grid } from "@material-ui/core";

import { renderAmount } from '../utils/helpers';

function InvoiceCard({ invoices = [] }) {
    return (
        <Card className="shadow-none rounded-[25px]">
            <CardContent className="p-3">
                {invoices && Object.keys(invoices).length > 0 ? invoices.map((invoice, index) => (
                    <Grid container className="p-3" key={index}>
                        <Grid item xs={10}>
                            <div className="flex">
                                <img src={invoice.icon} alt={invoice.alt} className="my-auto" />
                                <div className="ml-5 my-auto">
                                    <h4 className="body1">{invoice.name}</h4>
                                    <h5 className="body2 text-darkblue">{invoice.date}</h5>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2} className="my-auto">
                            <h4 className="body1 font-normal text-darkblue text-right">{renderAmount('', invoice.amount)}</h4>
                        </Grid>
                    </Grid>

                )) : <p>No Invoices</p>}
            </CardContent>
        </Card>
    );
}

InvoiceCard.propTypes = {
    invoices: PropTypes.array,
}

export default InvoiceCard;