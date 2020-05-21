//Importando react
import React from 'react';
//Importando modulos do react-router-dom
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Importando Pages
import Logon from './pages/Logon';
import RegisterMed from './pages/RegisterMed';
import RegisterPat from './pages/RegisterPat';
import NewIncident from './pages/NewIncident';


//A rota precisa estar dentro de BrowserRouter/Switch assim garantimos que somente uma rota será chamada.
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* path definine qual o caminho, componet chama o JSX, exact especifica exatamente a rota */}
                <Route path="/" exact component={Logon} />
                <Route path="/registermed" exact component={RegisterMed} />
                <Route path="/registerpat" exact component={RegisterPat} />
                <Route path="/newincident" exact component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}