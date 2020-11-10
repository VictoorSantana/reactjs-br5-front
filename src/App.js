import React from 'react';

import RouteLogin from './routes/routeLogin';
import RouteAdm from './routes/routeAdm';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import RouteListaMedicos from './routes/medicos/lista.route';
import RouteShowMedico from './routes/medicos/show.route';
import RouteEditMedicos from './routes/medicos/edit.route';


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
        </Switch>
  </BrowserRouter>
);

export default Routes;