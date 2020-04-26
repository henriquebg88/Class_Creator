import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Perfil from './Pages/Perfil';
import Perfil_edit from './Pages/Perfil _EDIT';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/perfil/edit" component={Perfil_edit} />
                <Route path="/perfil" component={Perfil} />
                <Route path="/registro" component={Register}></Route>
                <Route path="/" component={Login}></Route>
            </Switch>
        </BrowserRouter>
    )
}