import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class NavegadorComponente extends Component {
    render() {
        return (
            <div className="w-100 position-relative" style={{ minHeight: '100vh' }}>

                <div className="cnav-main">
                    <div className="cnav-nav bg-dark py-4">
                        <ul className="list-group list-group-flush">
                            <li> <Link to="/medicos" className="h5 text-white w-100 text-center d-block py-3 cnav-item border-primary"> Médicos </Link>  </li>
                            <li> <Link to="/consultorios" className="h5 text-white w-100 text-center d-block py-3 cnav-item border-primary"> Consultórios </Link>  </li>
                            <li> <Link to="/especialidades" className="h5 text-white w-100 text-center d-block py-3 cnav-item border-primary"> Especialidades </Link>  </li>
                        </ul>
                    </div>
                    <div className="cnav-body">
                        <div className="container py-2 border-bottom">
                            <div className="d-flex align-items-center justify-content-between">
                                <button className="btn btn-link"> <i className="fas fa-bars"></i> </button>                                
                                <button className="btn btn-link text-secondary"> <i className="fas fa-power-off"></i> </button>                                
                            </div>
                        </div>
                        <div className="container pt-3 pb-5">
                            <h2 className="text-dark mb-0"> {this.props.nomeRota} </h2>
                            <p className="text-secondary mb-5"> {this.props.subTexto} </p>
                            {this.props.children}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default NavegadorComponente;