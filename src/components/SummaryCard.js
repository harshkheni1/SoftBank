import React from "react";
import PropTypes from 'prop-types';

import { Card, CardContent } from "@material-ui/core";

function SummaryCard({ variant, icon, alt, heading, subheading }) {
    return (
        <Card className="shadow-none rounded-[25px]">
            <CardContent className="2xl:p-6 p-4">
                <div className="flex justify-center">
                    <img src={icon} alt={alt} />
                    <div className="ml-5 my-auto">
                        {variant === 'reverse' ?
                            <>
                                <h1 className="heading1 text-lightblack">{heading}</h1>
                                <h4 className="text-base font-normal text-darkblue">{subheading}</h4>
                            </>
                            :
                            <>
                                <h4 className="text-base font-normal text-darkblue">{heading}</h4>
                                <h1 className="heading1 text-lightblack">{subheading}</h1>
                            </>
                        }
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

SummaryCard.propTypes = {
    variant: PropTypes.string,
    icon: PropTypes.string,
    alt: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
}

export default SummaryCard;