import React, { Suspense, useMemo } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { employerRoutes } from './employerJourneyRoutes';

export const history = createBrowserHistory();

export const AppRouter = ({ productCode }) => {
    const routes = employerRoutes;

    return (
        <Router history={history}>
            <Suspense fallback={<div />}>
              
                    <Switch>
                        {routes.map(route => {
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    render={props => (
                                        <route.component {...props} {...route.props} routes={route.routes} />
                                    )}
                                />
                            );
                        })}
                    </Switch>
               
            </Suspense>
        </Router>
    );
};