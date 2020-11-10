import React, { Component } from 'react';
import NavegadorComponente from '../components/navegador/navegadorComponente';

class RouteAdm extends Component {
    render() {
        return (
            <NavegadorComponente nomeRota="Menu Inicial" subTexto="Seja bem-vindo!">
                <div className="row">
                    <div className="col-md-6">

                    </div>
                </div>
            </NavegadorComponente>
        );
    }
}

export default RouteAdm;