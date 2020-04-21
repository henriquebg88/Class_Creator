import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/registro" component={Register}></Route>
                <Route path="/" component={Login}></Route>
            </Switch>
        </BrowserRouter>
    )
}