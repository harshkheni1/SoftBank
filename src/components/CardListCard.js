import React from "react";
import PropTypes from 'prop-types';

import { Card, CardContent, Grid } from "@material-ui/core";

function CardListCard({ cards=[] }) {
    return (
        <>
            {cards && Object.keys(cards).length > 0 ? cards.map((card, index) => (
                <Card className="shadow-none rounded-[25px] mb-5" key={index}>
                    <CardContent className="md:p-5 p-3">
                        <Grid container>
                            <Grid item md={4} xs={6}>
                                <div className="flex">
                                    <img src={card.icon} alt={card.alt} />
                                    <div className="ml-5 my-auto">
                                        <h4 className="text-base font-medium text-lightblack">Card Type</h4>
                                        <h5 className="text-sm font-normal text-darkblue">{card.type}</h5>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={2} xs={3}>
                                <h4 className="text-base font-medium text-lightblack">Bank</h4>
                                <h5 className="text-sm font-normal text-darkblue">{card.bank}</h5>
                            </Grid>
                            <Grid item md={2} className="lg:block hidden">
                                <h4 className="text-base font-medium text-lightblack">Card Number</h4>
                                <h5 className="text-sm font-normal text-darkblue">{card.cardNumber}</h5>
                            </Grid>
                            <Grid item md={2} className="lg:block hidden">
                                <h4 className="text-base font-medium text-lightblack">Name on Card</h4>
                                <h5 className="text-sm font-normal text-darkblue">{card.holderName}</h5>
                            </Grid>
                            <Grid item md={2} xs={3} className="text-center my-auto"><span className="text-blue text-sm font-medium">View Details</span></Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )) : <p>No Cards</p>}
        </>
    );
}

CardListCard.propTypes = {
    cards: PropTypes.array,
}

export default CardListCard;