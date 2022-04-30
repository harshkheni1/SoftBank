import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

import { Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';

import { Topbar } from './index';
import { isMobileScreen } from '../utils/helpers';

import logoicon from '../assets/images/logo.svg';
import homeicon from '../assets/images/home.svg';
import transactionsicon from '../assets/images/transactions.svg';
import accountsicon from '../assets/images/accounts.svg';
import investmentsicon from '../assets/images/investments.svg';
import cardsicon from '../assets/images/cards.svg';
import loansicon from '../assets/images/loans.svg';
import servicesicon from '../assets/images/services.svg';
// import privillegesicon from '../assets/images/privilleges.svg';
import settingsicon from '../assets/images/settings.svg';

const routesArray = [
    {
        name: 'Dashboard',
        path: '/',
        icon: homeicon
    },
    {
        name: 'Transactions',
        path: '/transactions',
        icon: transactionsicon
    },
    {
        name: 'Accounts',
        path: '/accounts',
        icon: accountsicon
    },
    {
        name: 'Investments',
        path: '/investments',
        icon: investmentsicon
    },
    {
        name: 'Credit Cards',
        path: '/cards',
        icon: cardsicon
    },
    {
        name: 'Loans',
        path: '/loans',
        icon: loansicon
    },
    {
        name: 'Services',
        path: '/services',
        icon: servicesicon
    },
    // {
    //     name: 'My Privilleges',
    //     path: '/privilleges',
    //     icon: privillegesicon
    // },
    {
        name: 'Settings',
        path: '/settings',
        icon: settingsicon
    }
];

function Header({ history, location, heading="" }) {
    const [isMobile, setIsMobile] = useState(isMobileScreen);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleResize = () => { 
        setIsMobile(isMobileScreen);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <Topbar heading={heading} handleDrawerToggle={handleDrawerToggle} />
            <nav className="md:w-[240px] md:flex-shrink-0">
                <Drawer
                    variant={isMobile ? "temporary" : "permanent"}
                    anchor='left'
                    open={isMobile ? drawerOpen : true}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: "w-[240px]",
                    }}
                    ModalProps={{
                        keepMounted: true
                    }}
                >
                    <div className="sidebar">
                        <div className="lg:px-12 px-6 py-6">
                            <img src={logoicon} alt="logo" className="img-center" />
                        </div>
                        <List component="nav" aria-label="main">
                            {routesArray && Object.keys(routesArray).length > 0 && routesArray.map((route, index) => (
                                <ListItem
                                    button
                                    selected={(location && location.pathname && location.pathname) === (route && route.path)}
                                    onClick={() => history.push((route && route.path))}
                                    className="py-4"
                                    key={index}
                                >
                                    <ListItemIcon>
                                        <img src={(route && route.icon)} alt={(route && route.name)} className="lg:mx-6 mx-2" />
                                    </ListItemIcon>
                                    <span className="heading3 text-lightblack">{((route && route.name))}</span>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </nav>
        </>
    );
}

Header.propTypes = {
    heading: PropTypes.string
}

export default withRouter(Header);