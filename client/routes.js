import React from 'react';
import {
    Router,
    Route,
    browserHistory
} from 'react-router';

import District from './views/district';
import Districts from './views/districts';
import WifiPoint from './views/wifi-point';


export default () => (
    <Router history={browserHistory}>
        <Route path='/districts' component={Districts}>
        </Route>
        <Route path='/districts/:name' component={District}>
        </Route>
        <Route path='/districts/:name/:id' component={WifiPoint}>
        </Route>
    </Router>
);