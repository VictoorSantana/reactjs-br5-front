import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavegadorComponente from '../../components/navegador/navegadorComponente';

import _s from '../../service/chamada';

class RouteListaConsultorio extends Component {


    constructor(props) {
        super(props);

        this.state = {
            lista: []
        }
    }

    componentDidMount = async () => {
        this.handleChamada();
    }

    handleChamada = async () => {
        const resposta = JSON.parse(await _s.getc({}, 'consultorio'));
        this.setState({ lista: resposta });
    }

    handleDelete = async (id) => {
        const resposta = await _s.delete({}, 'consultorio/id/' + id);
        this.handleChamada();
    }

    render() {
        return (
            <NavegadorComponente nomeRota="Lista de Consultórios" subTexto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                <div className="row">
                    <div className="col-md-12">

                        <div className="d-flex justify-content-end mb-1">
                            <Link to="/consultorios/add" className="btn btn-primary">Adicionar </Link>
                        </div>

                        <div className="table-responsive">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Telefone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.lista.map((item) =>
                                            <tr>
                                                <th scope="row"> <Link to={`/consultorios/show/${item._id}`} className="btn btn-link"> <i class="fas fa-search"></i> </Link> </th>
                                                <th scope="row"> <Link to={`/consultorios/edit/${item._id}`} className="btn btn-link text-warning"> <i class="fas fa-edit"></i> </Link> </th>
                                                <th scope="row"> <span onClick={() => this.handleDelete(item._id)} className="btn btn-link text-danger"> <i class="fas fa-times"></i> </span> </th>
                                                <td>{item.nome}</td>
                                                <td>{item.telefone}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link text-dark" href="#"> <i class="fas fa-angle-left"></i> </a></li>
                                    <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link text-dark" href="#"> <i class="fas fa-angle-right"></i> </a></li>
                                </ul>
                            </nav>
                        </div>


                    </div>
                </div>
            </NavegadorComponente>
        );
    }
}

export default RouteListaConsultorio;