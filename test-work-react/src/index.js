import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import store from "store";

import "services/axios";
import {
    ProductsListContainer,
    ProductDetailsContainer,
    RegistrationContainer,
    ProfileContainer,
    PrivateRoute,
    LayoutContainer
} from "containers";
import ErrorIndicator from "components/error-indicator";

import "./main.css";

const root = () => document.getElementById("root");

render(
    <Provider store={store}>
    <Router>
        <LayoutContainer>
            <Switch>
                <Route path="/" component={ProductsListContainer} exact/>
                <Route path="/product/:id" component={ProductDetailsContainer}/>
                <Route path="/registration" component={RegistrationContainer}/>
                <PrivateRoute path="/profile" component={ProfileContainer}/>
                <Route component={ErrorIndicator}/>
            </Switch>
        </LayoutContainer>
    </Router>
</Provider>, root());
