import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

import { AppBar, IconButton, Toolbar, Grid } from '@material-ui/core';

import { SearchInput } from './index';

import menuicon from '../assets/images/menu.svg';
import settings2icon from '../assets/images/settings2.svg';
import notificationicon from '../assets/images/notification.svg';
import usericon from '../assets/images/user.png';

function Topbar({ heading="", handleDrawerToggle={} }) {
    return (
        <AppBar position="fixed" className="topbar bg-white border-b-2 border-offwhite2 shadow-none py-2">
            <Toolbar className="xl:px-10 px-5">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className="md:hidden mr-4"
                >
                    <img src={menuicon} alt="menu" />
                </IconButton>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <h1 className="heading1 text-darkblack">{heading}</h1>
                    <div className="flex">
                        <div className="md:block hidden">
                            <div className="flex h-full">
                                <SearchInput fullWidth={false} />
                            </div>
                        </div>
                        <img src={settings2icon} alt="settings" className="lg:w-12 w-6 lg:mr-4 mr-1 my-auto" />
                        <img src={notificationicon} alt="notification" className="lg:w-12 w-6 lg:mr-4 mr-1 my-auto" />
                        <img src={usericon} alt="user" className="lg:w-16 w-9 rounded-full" />
                    </div>
                </Grid>
            </Toolbar>
            <div className="md:hidden block px-4">
                <SearchInput />
            </div>
        </AppBar>
    );
}

Topbar.propTypes = {
    heading: PropTypes.string,
    handleDrawerToggle: PropTypes.func
}

export default withRouter(Topbar);