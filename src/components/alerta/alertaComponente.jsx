import React, { Component } from 'react';

class AlertaComponente extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="position-fixed" style={{right: '10px', top: '70px', zIndex: '4'}}>
                <div className={`alert alert-${this.props.tipo} alert-dismissible fade show`} role="alert">
                    <strong>{this.props.titulo}</strong> {this.props.mensagem}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.props.fechar}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default AlertaComponente;