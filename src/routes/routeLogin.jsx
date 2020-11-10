import React, { Component } from 'react';
import AlertaComponente from '../components/alerta/alertaComponente';

import _f from '../util/formfast';
import _s from '../service/chamada';

class RouteLogin extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            logMsg: '',
            tipoMsg: ''

        }


    }


    handleSubmit = async (event) => {
        event.preventDefault();

        const request = _f.getObject(event.target);
                
        this.props.history.push('/adm');
    }

    render() {
        return (
            <>                
                <div className="w-100 d-flex justify-content-center align-items-center bg-dark" style={{ minHeight: '100vh' }}>

                    <div className="bg-white shadow py-3 px-5">
                        <h1 className="text-center h3 m-0"> Teste BR5 </h1>
                        <hr></hr>

                        <form onSubmit={this.handleSubmit} autoComplete="off">
                            <input type="hidden" value="2cb84aaa0f774f0fc2f48f03871fce1323eb59b6" name="chave" />                            

                            <div className="form-group">
                                <label className="d-block m-0 text-secondary">Usuário:</label>
                                <input type="text" className="form-control rounded-0" name="usuario"></input>
                            </div>
                            <div className="form-group">
                                <label className="d-block m-0 text-secondary">Senha:</label>
                                <input type="password" className="form-control rounded-0" name="senha"></input>
                            </div>
                            <div className="form-group d-flex justify-content-between">
                                <button type="button" className="btn btn-link">Fechar</button>
                                <button type="submit" className="btn btn-primary">Entrar</button>
                            </div>                            
                        </form>
                    </div>

                </div>

                {
                    this.state.logMsg.trim().length > 0 ? (
                        <AlertaComponente titulo="Autenticação." tipo={this.state.tipoMsg} mensagem={this.state.logMsg} fechar={() => this.setState({ logMsg: '' })}></AlertaComponente>
                    ) : ''
                }

            </>

        );
    }
}

export default RouteLogin;