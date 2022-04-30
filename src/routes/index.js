import React, { useLayoutEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { Dashboard, Transactions, Accounts, Investments, CreditCards, Loans, Services, Settings, PageNotFound, Login, Register } from '../containers';

function Routes() {
    const location = useLocation();
    // Scroll to top if path changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route exact path="/transactions">
                <Transactions />
            </Route>
            <Route exact path="/accounts">
                <Accounts />
            </Route>
            <Route exact path="/investments">
                <Investments />
            </Route>
            <Route exact path="/cards">
                <CreditCards />
            </Route>
            <Route exact path="/loans">
                <Loans />
            </Route>
            <Route exact path="/services">
                <Services />
            </Route>
            <Route exact path="/settings">
                <Settings />
            </Route>
            <Route path="/">
                <PageNotFound />
            </Route>
        </Switch>
    );
}

export default Routes;