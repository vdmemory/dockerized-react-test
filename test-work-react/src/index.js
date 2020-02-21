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

import * as Sentry from '@sentry/browser';

Sentry.init({dsn: 'https://88553999836d4fe4b7682398d11959c4@sentry.io/2707378', environment: 'dev', debug: true});
Sentry.withScope(function (scope) {
    scope.setTag("my-tag", "my value");
    scope.setLevel('warning');
    // will be tagged with my-tag="my value"
    Sentry.captureException(new Error('my error'));
});

// will not be tagged with my-tag
Sentry.captureException(new Error('my other error'));

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
