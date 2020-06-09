//Importando react
import React from 'react';
//Importando modulos do react-router-dom
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Importando Pages
import Home from './pages/Home';
import RegisterMed from './pages/RegisterMed';
import RegisterPat from './pages/RegisterPat';
import ListIncident from './pages/ListIncident';
import NewIncident from './pages/NewIncident';
import DiagnosticPat from './pages/Diagnostic/DiagnosticPat';
import DiagnosticMed from './pages/Diagnostic/DiagnosticMed';
import LogonMed from './pages/Logon/LogonMed';
import LogonPat from './pages/Logon/LogonPat';
import LogonAdmin from './pages/Logon/LogonAdmin';


//A rota precisa estar dentro de BrowserRouter/Switch assim garantimos que somente uma rota será chamada.
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* path definine qual o caminho, componet chama o JSX, exact especifica exatamente a rota */}
                {/* <Route path="/" exact component={Logon} /> */}
                <Route path="/" exact component={Home} />
                <Route path="/registermed" exact component={RegisterMed} />
                <Route path="/registerpat" exact component={RegisterPat} />
                <Route path="/listIncident" exact component={ListIncident} />
                <Route path="/newIncident" exact component={NewIncident} />
                <Route path="/diagnosticpat" exact component={DiagnosticPat} />
                <Route path="/diagnosticmed" exact component={DiagnosticMed} />
                <Route path="/logonmed" exact component={LogonMed} />
                <Route path="/logonpat" exact component={LogonPat} />
                <Route path="/logonadmin" exact component={LogonAdmin} />
            </Switch>
        </BrowserRouter>
    );
}