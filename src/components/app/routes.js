import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { PhoneOptions, AddPhone, DeletePhone, GetPhoneById, GetPhoneByMakeModel } from "./routes"


export const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={PhoneOptions} />
                <Route exact path="/AddPhone" component={AddPhone} />
                <Route exact path="/DeletePhone" component={DeletePhone} />
                <Route exact path="/GetPhoneById" component={GetPhoneById} />
                <Route exact path="/GetPhoneByMakeModel" component={GetPhoneByMakeModel} />
                <Redirect to="/PhoneOptions" />
            </Switch>
        </Router>
    );

};
