import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavegadorComponente from '../../components/navegador/navegadorComponente';
import _s from '../../service/chamada';
import _f from '../../util/formfast';

class RouteEditConsultorio extends Component {


    constructor(props) {
        super(props);

        this.state = {
            especs: [],
            medics: [],

            fNome: '',
            fTelefone: '',
            fEspc: [],
            fMed: [],

            msgLog: ''
        }
    }


    componentDidMount = async () => {
        const id = (this.props.match.params.id);
        const resposta = JSON.parse(await _s.getc({}, 'consultorio/id/' + id));
        console.log(resposta);

        this.setState({
            fNome: resposta.nome,
            fTelefone: resposta.telefone,
            fEspc: resposta.especialidades,
            fMed: resposta.medicos
        });

        const resposta2 = JSON.parse(await _s.getc({}, 'especialidade/'));

        const resposta3 = JSON.parse(await _s.getc({}, 'medico/'));
        this.setState({ especs: resposta2, medics: resposta3 });
    }


    handleAddEspc = (event) => {
        event.preventDefault();

        const obj = _f.getObject(event.target);

        var arr = this.state.fEspc ? this.state.fEspc : [];

        arr.push({
            _id: obj.espcs.split('_')[0],
            nome: obj.espcs.split('_')[1]
        });

        this.setState({ fEspc: arr });
    }

    handleAddMed = (event) => {
        event.preventDefault();

        const obj = _f.getObject(event.target);

        var arr = this.state.fMed ? this.state.fMed : [];

        arr.push({
            _id: obj.medics.split('_')[0],
            nome: obj.medics.split('_')[1]
        });

        this.setState({ fMed: arr });
    }

    removeEspc = (id) => {

        const newArr = this.state.fEspc.filter(function (item) {
            return item._id !== id
        });

        this.setState({ fEspc: newArr });
    }

    removeMed = (id) => {

        const newArr = this.state.fMed.filter(function (item) {
            return item._id !== id
        });

        this.setState({ fMed: newArr });
    }

    handleSubmitNovo = async (event) => {
        event.preventDefault();

        let especialidades = [];
        if (this.state.fEspc.length > 0) {
            for (var i = 0; i < this.state.fEspc.length; i++) {
                especialidades.push(this.state.fEspc[i]._id);
            }
        }

        const id = (this.props.match.params.id);

        const { status, ok } = await _s.put({
            especialidades,
            nome: this.state.medNome,
            telefone: this.state.medCrm,
        }, 'consultorio/id/' + id);

        if (ok) {
            this.props.history.push('/consultorios');
        } else {
            this.setState({ msgLog: 'Erro ...' });
        }

    }


    render() {
        return (
            <NavegadorComponente nomeRota="Editar Consultório" subTexto="Lorem ipsum dolor.">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="mb-0 text-secondary d-block"> Especialidades </label>

                            <form onSubmit={this.handleAddEspc} className="d-flex">
                                <select className="form-control" name="espcs">
                                    {
                                        this.state.especs ? (
                                            this.state.especs.map((espc) =>
                                                <option value={`${espc._id}_${espc.nome}`} key={espc._id}>{espc.nome}</option>
                                            )
                                        ) : ('')
                                    }
                                </select>
                                <button type="submit" className="btn btn-link"> <i class="far fa-plus-square"></i> </button>
                            </form>


                        </div>
                        <div className="form-group">
                            <div className="w-100">
                                <h4 className="text-center text-primary"> Especialidades  </h4>
                                <hr />
                                {
                                    this.state.fEspc ? (
                                        this.state.fEspc.map((espc) =>
                                            <div className="position-relative py-2" key={espc._id}>
                                                <button type="button" onClick={() => this.removeEspc(espc._id)} className="btn btn-link text-danger position-absolute" style={{ right: '0px', top: '0px' }}> <i className="fas fa-times"></i> </button>
                                                <h6 className="text-center m-0"> {espc.nome} </h6>
                                            </div>
                                        )
                                    ) : ('')

                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="mb-0 text-secondary d-block"> Médicos Disponíveis </label>

                            <form onSubmit={this.handleAddMed} className="d-flex">
                                <select className="form-control" name="medics">
                                    {
                                        this.state.medics ? (
                                            this.state.medics.map((item) =>
                                                <option value={`${item._id}_${item.nome}`} key={item._id}>{item.nome}</option>
                                            )
                                        ) : ('')
                                    }
                                </select>
                                <button type="submit" className="btn btn-link"> <i class="far fa-plus-square"></i> </button>
                            </form>


                        </div>
                        <div className="form-group">
                            <div className="w-100">
                                <h4 className="text-center text-primary"> Médicos Cadastrados  </h4>
                                <hr />
                                {
                                    this.state.fMed ? (
                                        this.state.fMed.map((item) =>
                                            <div className="position-relative py-2" key={item._id}>
                                                <button type="button" onClick={() => this.removeMed(item._id)} className="btn btn-link text-danger position-absolute" style={{ right: '0px', top: '0px' }}> <i className="fas fa-times"></i> </button>
                                                <h6 className="text-center m-0"> {item.nome} </h6>
                                            </div>
                                        )
                                    ) : ('')

                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmitNovo}>

                            <div className="form-group">
                                <label className="mb-0 text-secondary d-block" > Nome </label>
                                <input type="text" className="form-control" onChange={(e) => this.setState({ fNome: e.target.value })} value={this.state.fNome} />
                            </div>
                            <div className="form-group">
                                <label className="mb-0 text-secondary d-block"> Telefone </label>
                                <input type="number" className="form-control" onChange={(e) => this.setState({ fTelefone: e.target.value })} value={this.state.fTelefone} />
                            </div>
                            <div className="form-group">
                                <Link to="/consultorios" className="btn btn-secondary mr-1 text-white"> Cancelar </Link>
                                <button className="btn btn-primary" type="submit">Salvar</button>
                                <small className="text-danger"> * {this.state.msgLog} </small>
                            </div>

                        </form>
                    </div>
                </div>
            </NavegadorComponente>
        );
    }
}

export default RouteEditConsultorio;