import React from "react";
import PropTypes from 'prop-types';

import { Card, CardContent, Grid } from "@material-ui/core";

import { renderAmount } from '../utils/helpers';

function TransactionCard({ variant = 'last', transactions = [] }) {
    return (
        <Card className="shadow-none rounded-[25px]">
            <CardContent className="p-3">
                {transactions && Object.keys(transactions).length > 0 ? transactions.map((transaction, index) => (
                    <Grid container className="py-3" key={index}>
                        <Grid item lg={variant === 'recent' ? 9 : 4} xs={9}>
                            <div className="flex">
                                <img src={transaction.icon} alt={transaction.alt} className="my-auto" />
                                <div className="ml-5 my-auto">
                                    <h4 className="body1">{transaction.name}</h4>
                                    <h5 className="body2 text-darkblue">{transaction.date}</h5>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={2} className={(variant === 'recent' ? 'hidden' : 'xl:block hidden') + " my-auto"}>
                            <h4 className="body1 font-normal text-darkblue">{transaction.category}</h4>
                        </Grid>
                        <Grid item lg={2} className={(variant === 'recent' ? 'hidden' : 'xl:block hidden') + " my-auto"}>
                            <h4 className="body1 font-normal text-darkblue">{transaction.cardNumber}</h4>
                        </Grid>
                        <Grid item lg={1} className={(variant === 'recent' ? 'hidden' : 'xl:block hidden') + " my-auto"}>
                            <h4 className="body1 font-normal text-darkblue">{transaction.status}</h4>
                        </Grid>
                        <Grid item xs={3} className="my-auto">
                            <h4 className="body1 text-right">{renderAmount(transaction.type, transaction.amount)}</h4>
                        </Grid>
                    </Grid>

                )) : <p>No Recent Transaction</p>}
            </CardContent>
        </Card>
    );
}

TransactionCard.propTypes = {
    variant: PropTypes.string,
    transactions: PropTypes.array,
}

export default TransactionCard;