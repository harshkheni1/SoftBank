import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { Grid, AppBar, Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import { Header, ToggleSwitch, CustomInput, CustomButton, CustomDropdown, CustomDatepicker } from '../components';

import usericon from '../assets/images/user.png';
import editicon from '../assets/images/edit.svg';

const countries = [
    {
      value: 'USA',
      label: 'USA',
    },
    {
      value: 'Switzerland',
      label: 'Switzerland',
    },
    {
      value: 'UAE',
      label: 'UAE',
    },
    {
      value: 'Fiji',
      label: 'Fiji',
    },
];

const currencies = [
    {
      value: 'USD',
      label: 'USD',
    },
    {
      value: 'EUR',
      label: 'EUR',
    },
    {
      value: 'BTC',
      label: 'BTC',
    },
    {
      value: 'JPY',
      label: 'JPY',
    },
];

const timezones = [
    {
      value: '-12',
      label: '(GMT-12:00) International Date Line West',
    },
    {
      value: '-11',
      label: '(GMT-11:00) Midway Island, Samoa',
    },
    {
      value: '1',
      label: '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    },
    {
      value: '9',
      label: '(GMT+09:00) Osaka, Sapporo, Tokyo',
    },
];

function Settings() {
    const [tabIndex, setTabIndex] = useState(0);
    const [dob, setDob] = useState(new Date("25 January 1990"));
    const [dropdown, setDropdown] = useState({
        country: 'USA',
        currency: 'USD',
        timezone: '-12'
    });
    const [toggle, setToggle] = useState({
        digitalCurrency: true,
        merchantOrder: false,
        recommendation: true,
        twoFactorAuthentication: true
    });

    const settingsTabs = [
        {
            name: 'Edit Profile'
        },
        {
            name: 'Preferences'
        },
        {
            name: 'Security'
        }
    ];

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };

    const handleViewChangeIndex = (index) => {
        setTabIndex(index);
    };

    const handleDropdownChange = (event) => {
        setDropdown({ ...dropdown, [event.target.name]: event.target.value});
    };

    const handleToggleChange = (event) => {
        setToggle({ ...toggle, [event.target.name]: event.target.checked });
    };

    const EditProfile = () => {
        return (
            <div className="pt-5">
                <Grid container className="pt-4 pb-2">
                    <Grid item xl={2} lg={3} xs={12} className="xl:pr-2">
                        <div className="py-2">
                            <div className="w-[200px] h-[200px] mx-auto relative">
                                <img src={usericon} alt="user" width="200" height="200" className="rounded-full" />
                                <img src={editicon} alt="pencil" className="absolute bottom-8 right-0" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xl={10} lg={9} xs={12} className="xl:pl-2">
                        <Grid container>
                            <Grid item md={6} xs={12} className="lg:pr-2">
                                <div className="py-2">
                                    <p className="body1 text-lightblack mb-2">Your Name</p>
                                    <CustomInput defaultValue="Charlene Reed" />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} className="lg:pl-2">
                                <div className="py-2">
                                    <p className="body1 text-lightblack mb-2">User Name</p>
                                    <CustomInput defaultValue="Charlene Reed" />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} className="lg:pr-2">
                                <div className="py-2">
                                    <p className="body1 text-lightblack mb-2">Email</p>
                                    <CustomInput defaultValue="charlenereed@gmail.com " />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} className="lg:pl-2">
                                <div className="py-2">
                                    <p className="body1 text-lightblack mb-2">Password</p>
                                    <CustomInput type="password" defaultValue="Charlene" />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} className="lg:pr-2">
                                <div className="py-2">
                                    <p className="body1 text-lightblack mb-2">Date of Birth</p>
                                    <CustomDatepicker value={dob} onChange={setDob} />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} className="lg:pl-2">
                                <div className="py-2">
                                    <p className="body1 text-lightblack mb-2">Present Address</p>
                                    <CustomInput defaultValue="San Jose, California, USA" />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} className="lg:pr-2">
                                <div className="py-2">
                                    <p className="body1 text-lightblack mb-2">Permanent Address</p>
                                    <CustomInput defaultValue="San Jose, California, USA" />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} className="lg:pl-2">
                                <div className="py-2">
                                    <p className="body1 text-lightblack mb-2">City</p>
                                    <CustomInput defaultValue="San Jose" />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} className="lg:pr-2">
                                <div className="py-2">
                                    <p className="body1 text-lightblack mb-2">Postal Code</p>
                                    <CustomInput defaultValue="45962" />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} className="lg:pl-2">
                                <div className="py-2">
                                    <p className="body1 text-lightblack mb-2">Country</p>
                                    <CustomDropdown defaultValue={Object.values(dropdown)[0]} onChange={handleDropdownChange} name={Object.keys(dropdown)[0]} options={countries} />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div className="flex justify-end pt-4">
                    <CustomButton label="Save" />
                </div>
            </div>
        );
    }

    const Preferences = () => {
        return (
            <div className="pt-5">
                <div className="py-2">
                    <div className="py-2">
                        <Grid container>
                            <Grid item md={6} xs={12} className="lg:pr-2 lg:mb-0 mb-3">
                                <p className="body1 text-lightblack mb-2">Currency</p>
                                <CustomDropdown defaultValue={Object.values(dropdown)[1]} onChange={handleDropdownChange} name={Object.keys(dropdown)[1]} options={currencies} />
                            </Grid>
                            <Grid item md={6} xs={12} className="lg:pl-2">
                                <p className="body1 text-lightblack mb-2">Time Zone</p>
                                <CustomDropdown defaultValue={Object.values(dropdown)[2]} onChange={handleDropdownChange} name={Object.keys(dropdown)[2]} options={timezones} />
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="py-2">
                    <h2 className="heading3 text-black my-2">Notification</h2>
                    <div className="flex py-2">
                        <ToggleSwitch checked={Object.values(toggle)[0]} onChange={handleToggleChange} name={Object.keys(toggle)[0]} />
                        <p className="body1 text-lightblack ml-5 my-auto">I send or receive digital currency</p>
                    </div>
                    <div className="flex py-2">
                        <ToggleSwitch checked={Object.values(toggle)[1]} onChange={handleToggleChange} name={Object.keys(toggle)[1]} />
                        <p className="body1 text-lightblack ml-5 my-auto">I receive merchant order</p>
                    </div>
                    <div className="flex py-2">
                        <ToggleSwitch checked={Object.values(toggle)[2]} onChange={handleToggleChange} name={Object.keys(toggle)[2]} />
                        <p className="body1 text-lightblack ml-5 my-auto">There are recommendation for my account</p>
                    </div>
                </div>
                <div className="flex justify-end pt-4">
                    <CustomButton label="Save" />
                </div>
            </div>
        );
    }

    const Security = () => {
        return (
            <div className="pt-5">
                <div className="py-2">
                    <h2 className="heading3 text-black my-2">Two-factor Authentication</h2>
                    <div className="flex py-2">
                        <ToggleSwitch checked={Object.values(toggle)[3]} onChange={handleToggleChange} name={Object.keys(toggle)[3]} />
                        <p className="body1 text-lightblack ml-5 my-auto">Enable or disable two factor authentication</p>
                    </div>
                </div>
                <div className="py-2">
                    <h2 className="heading3 text-black my-2">Change Password</h2>
                    <div className="py-2">
                        <p className="body1 text-lightblack mb-2">Current Password</p>
                        <div className="2xl:w-1/4 lg:w-1/2 md:w-3/4">
                            <CustomInput type="password" defaultValue="" />
                        </div>
                    </div>
                    <div className="py-2">
                        <p className="body1 text-lightblack mb-2">New Password</p>
                        <div className="2xl:w-1/4 lg:w-1/2 md:w-3/4">
                            <CustomInput type="password" defaultValue="" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end pt-4">
                    <CustomButton label="Save" />
                </div>
            </div>
        );
    }

    return (
        <>
            <Header heading="Settings" />
            <main className="md:ml-[240px] md:mt-20 mt-28">
                <div className="xl:p-10 p-5">
                    <div className="bg-white rounded-[25px] p-5">
                        <AppBar position="static" className="bg-white text-darkblue border-b border-offwhite3 shadow-none">
                            <Tabs className="nav-tabs" value={tabIndex} onChange={handleTabChange} variant="scrollable" scrollButtons="off" aria-label="setting tabs">
                                {settingsTabs && Object.keys(settingsTabs).length > 0 && settingsTabs.map((st) => (
                                    <Tab label={st && st.name} className="capitalize opacity-100 md:text-base text-sm" key={st && st.name} />
                                ))}
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis='x'
                            index={tabIndex}
                            onChangeIndex={handleViewChangeIndex}
                            className="settings-view"
                        >
                            <div
                                role="tabpanel"
                                hidden={tabIndex !== 0}
                                aria-labelledby="settings-profile"
                            >
                                <EditProfile />
                            </div>
                            <div
                                role="tabpanel"
                                hidden={tabIndex !== 1}
                                aria-labelledby="settings-preferences"
                            >
                                <Preferences />
                            </div>
                            <div
                                role="tabpanel"
                                hidden={tabIndex !== 2}
                                aria-labelledby="settings-security"
                            >
                                <Security />
                            </div>
                        </SwipeableViews>
                    </div>
                </div>
            </main>
        </>
    );
}

export default withRouter(Settings);