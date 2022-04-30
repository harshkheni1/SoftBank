import React from "react";
import PropTypes from 'prop-types';

import { Card, CardContent, Grid } from '@material-ui/core';

import chip from '../assets/images/chip.svg';
import chipGrey from '../assets/images/chip_grey.svg';
import mastercardlogo from '../assets/images/mastercard_logo.svg';
import mastercardlogoGrey from '../assets/images/mastercard_logo_grey.svg';

function CardDetailsCard({ variant="white", balance="$0", holder="", expiry="", number="" }) {
    return (
        <Card className={"shadow-none rounded-[25px] " + (variant === "yellow" ? "yellow-gradient-background" : (variant === "blue" ? "blue-gradient-background" : "bg-white"))}>
            <CardContent className="2xl:p-8 sm:p-6 p-4">
                <Grid container className="mb-4">
                    <Grid item xs={10}>
                        <p className={"small1 " + (variant === "white" ? "text-darkblue" : "text-white")}>Balance</p>
                        <h4 className={"heading3 font-semibold " + (variant === "white" ? "text-darkblack" : "text-white")}>{balance}</h4>
                    </Grid>
                    <Grid item xs={2}>
                        <img src={(variant === "white" ? chipGrey : chip)} alt="chip" className="ml-auto my-auto" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={"small1 opacity-70 " + (variant === "white" ? "text-darkblue" : "text-white")}>CARD HOLDER</p>
                        <h5 className={"body1 font-normal " + (variant === "white" ? "text-darkblack" : "text-white")}>{holder}</h5>
                    </Grid>
                    <Grid item xs={4}>
                        <p className={"small1 opacity-70 " + (variant === "white" ? "text-darkblue" : "text-white")}>VALID THRU</p>
                        <h5 className={"body1 font-normal " + (variant === "white" ? "text-darkblack" : "text-white")}>{expiry}</h5>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent className={"2xl:p-8 sm:p-6 p-4 " + (variant === "white" ? "border-t border-lightgrey" : "white-gradient-background")}>
                <Grid container>
                    <Grid item xs={10}>
                        <h1 className={"heading1 font-normal " + (variant === "white" ? null : "text-white")}>{number}</h1>
                    </Grid>
                    <Grid item xs={2}>
                        <img src={(variant === "white" ? mastercardlogoGrey : mastercardlogo)} alt="mastercard" className="ml-auto my-auto" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

CardDetailsCard.propTypes = {
    variant: PropTypes.string,
    balance: PropTypes.string,
    holder: PropTypes.string,
    expiry: PropTypes.string,
    number: PropTypes.string,
}

export default CardDetailsCard;