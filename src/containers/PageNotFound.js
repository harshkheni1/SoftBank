import React from "react";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import logo from '../assets/images/logo.svg';
import pagenotfound from '../assets/images/page_not_found.png';

function Dashboard() {
    return (
        <>
            <Grid container>
                <Grid item md={4} xs={12}>
                    <div className="flex justify-start m-10">
                        <img src={logo} alt="logo" />
                    </div>
                </Grid>
            </Grid>
            <div className="flex justify-center font-bold text-4xl mt-[15%] md:mt-10 m-5 md:m-0">
                <h>This page is lost in space!</h>
            </div>
            <div className="flex justify-center text-2xl  mt-[10%] md:mt-5 m-5 md:m-0">
                <p>We can’t find what you’re looking for, but the links below may help.</p>
            </div>
            <div className="flex justify-center mt-[30%] md:mt-10">
                <img src={pagenotfound} alt="page not found" />
            </div>

        </>
    );
}

export default withRouter(Dashboard);