import React from 'react';

import RouteLogin from './routes/routeLogin';
import RouteAdm from './routes/routeAdm';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import RouteListaMedicos from './routes/medicos/lista.route';
import RouteShowMedico from './routes/medicos/show.route';
import RouteEditMedicos from './routes/medicos/edit.route';
import RouteAddMedico from './routes/medicos/add.route';

import RouteListaConsultorio from './routes/consultorio/lista.route';
import RouteEditConsultorio from './routes/consultorio/edit.route';


// const PrivateRoute = ({ component: Component, ... rest }) => (
//   <Route 
//   { ... rest}
//   render={props => 
//       Autenticacao.verificar() ? (
//           <Component { ... props} />
//       ): (
//           <Redirect to={{ pathname: "/", state: { from: props.location } }}/>
//       )
//   }
//   />
// );

const Routes = () => (
  <BrowserRouter>
        <Switch>
            <Route exact path="/" component={(props) => <RouteLogin  {...props}></RouteLogin>}></Route>                        
            <Route exact path="/adm" component={(props) => <RouteAdm {...props}></RouteAdm>}></Route>

            <Route exact path="/medicos" component={(props) => <RouteListaMedicos {...props}></RouteListaMedicos>}></Route>            
            <Route exact path="/medicos/show/:id" component={(props) => <RouteShowMedico {...props}></RouteShowMedico>}></Route>            
            <Route exact path="/medicos/edit/:id" component={(props) => <RouteEditMedicos {...props}></RouteEditMedicos>}></Route>            
            <Route exact path="/medicos/add/" component={(props) => <RouteAddMedico {...props}></RouteAddMedico>}></Route>            

            <Route exact path="/consultorios" component={(props) => <RouteListaConsultorio {...props}></RouteListaConsultorio>}></Route>            
            <Route exact path="/consultorios/edit/:id" component={(props) => <RouteEditConsultorio {...props}></RouteEditConsultorio>}></Route>            
        </Switch>
  </BrowserRouter>
);

export default Routes;