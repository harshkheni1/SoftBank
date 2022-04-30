import React from "react";
import PropTypes from 'prop-types';

import { Card, CardContent, Grid } from "@material-ui/core";

import { OutlineButton } from '../components';

function ServiceCard({ services=[] }) {
    return (
        <>
            {services && Object.keys(services).length > 0 ? services.map((service, index) => (
                <Card className="shadow-none rounded-[25px] mb-5" key={index}>
                    <CardContent className="sm:p-5 p-3">
                        <Grid container>
                            <Grid item md={4} xs={8}>
                                <div className="flex">
                                    <img src={service.icon} alt={service.alt} width="50" height="50" className="my-auto" />
                                    <div className="ml-5 my-auto">
                                        <h4 className="text-base font-medium text-lightblack">{service.name}</h4>
                                        <h5 className="text-sm font-normal text-darkblue">{service.description}</h5>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={2} className="lg:block hidden my-auto">
                                <h4 className="text-base font-medium text-lightblack">{service.value1}</h4>
                                <h5 className="text-sm font-normal text-darkblue">Many publishing</h5>
                            </Grid>
                            <Grid item md={2} className="lg:block hidden my-auto">
                                <h4 className="text-base font-medium text-lightblack">{service.value2}</h4>
                                <h5 className="text-sm font-normal text-darkblue">Many publishing</h5>
                            </Grid>
                            <Grid item md={2} className="lg:block hidden my-auto">
                                <h4 className="text-base font-medium text-lightblack">{service.value3}</h4>
                                <h5 className="text-sm font-normal text-darkblue">Many publishing</h5>
                            </Grid>
                            <Grid item md={2} xs={4} className="text-center my-auto">
                                <OutlineButton label="View Details" />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )) : <p>No Services</p>}
        </>
    );
}

ServiceCard.propTypes = {
    services: PropTypes.array,
}

export default ServiceCard;