import React from "react";
import { withRouter } from "react-router-dom";

import { Grid, TextField, Button, Checkbox, Card, CardContent } from "@material-ui/core";

import { BarGraph, ButtonInput, PersonCard } from '../components';

import logo from '../assets/images/logo.svg';
import user1 from '../assets/images/user1.svg';
import user2 from '../assets/images/user2.svg';
import user3 from '../assets/images/user3.svg';

const persons = [
    { icon: user1, alt: 'user1', name: 'Livia Bator', tag: 'CEO' },
    { icon: user2, alt: 'user2', name: 'Randy Press', tag: 'Director' },
    { icon: user3, alt: 'user3', name: 'Workman', tag: 'Designer' },
    { icon: user1, alt: 'user1', name: 'Livia Bator', tag: 'CEO' },
    { icon: user2, alt: 'user2', name: 'Randy Press', tag: 'Director' },
    { icon: user3, alt: 'user3', name: 'Workman', tag: 'Designer' },
    { icon: user1, alt: 'user1', name: 'Livia Bator', tag: 'CEO' },
    { icon: user2, alt: 'user2', name: 'Randy Press', tag: 'Director' },
    { icon: user3, alt: 'user3', name: 'Workman', tag: 'Designer' }
];

function Login() {
    return (
        <>
            <Grid container>
                <Grid item md={4} xs={12}>
                    <div className="flex justify-start m-10">
                        <img src={logo} alt="logo" />
                    </div>
                </Grid>
                <Grid item md={8} xs={12} className="bg-lightyellow"></Grid>
            </Grid>
            <div className="">
                <Grid container>
                    <Grid item md={4} xs={12}>
                        <div className="pr-10 pl-[10%] pb-10">
                            <h className="font-bold text-4xl">Login</h>
                            <div className="block md:flex mt-5">
                                <p className="text-grey">Need a Softbank account?</p>
                                <p className="text-blue cursor-pointer">Create an account</p>
                            </div>
                            <div className="mt-5">
                                <h>Username</h><br />
                                <TextField className="w-full md:w-3/4" id="outlined-basic" variant="outlined" />
                            </div>
                            <div className="mt-3">
                                <h>Password</h><br />
                                <TextField className="w-full md:w-3/4" id="outlined-basic" variant="outlined" type="password" />
                            </div>
                            <div className="mt-5 w-full">
                                <Button className="w-full md:w-3/4 bg-primary text-white" variant="contained">
                                    Login
                                </Button>
                            </div>
                            <div className="mt-5 ml-[15%]">
                                <Checkbox
                                    className="inline-block"
                                    defaultChecked
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <p className="inline-block">Keep me logged in</p>
                            </div>
                            <div className="flex mt-5 ml-3">
                                <p className="text-blue pr-1 md:pr-3 cursor-pointer">Forgot username?</p>
                                <p>.</p>
                                <p className="text-blue pl-1 md:pl-3 cursor-pointer">Forgot password?</p>
                            </div>
                        </div>
                        <div className="m-5 sm:mt-[40%] md:mt-[20%]">
                            <p>©2001–2020 All Rights Reserved. Softbank® is a registered trademark.</p>
                            <p className="text-blue cursor-pointer">Cookie Preferences, Privacy, and Terms.</p>
                        </div>
                    </Grid>
                    <Grid item md={8} xs={12} className="hidden md:block mt-10 md:mt-0 bg-lightyellow">
                        <div className="pr-10 pl-[10%] pb-10">
                            <h className="font-bold text-2xl">Weekly Activity</h>
                            <div className="w-full md:w-3/4 mt-5">
                                <BarGraph />
                            </div>
                            <Grid container className="mt-[10%]">
                                <Grid item xs={12} md={6}>
                                    <h className="font-bold text-3xl mt-5">Manage your <br /> finance better way</h>
                                    <p className="mt-3">We can’t find what you’re looking for, <br /> but the links below may help.</p>
                                </Grid>
                                <Grid item xs={12} md={6} className="relative">
                                    <Grid item md={12} xs={12} className="static md:absolute inset-x-0 md:top-[-50%] lg:top-[-80%] h-16">
                                        <Card className="shadow-2xl rounded-lg">
                                            <CardContent className="sm:p-5 p-3">
                                                <div className="person-list overflow-x-scroll whitespace-nowrap">
                                                    {persons && Object.keys(persons).length > 0 ? persons.map((person) => (
                                                        <div className="inline-block mr-6">
                                                            <PersonCard icon={person.icon} alt={person.alt} name={person.name} tag={person.tag} />
                                                        </div>
                                                    )) : <p>No persons</p>}
                                                </div>
                                                <div className="flex justify-between mt-8">
                                                    <p className="text-base font-normal text-darkblue my-auto">Write Amount</p>
                                                    <ButtonInput fullWidth={false} defaultValue="525.50" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default withRouter(Login);