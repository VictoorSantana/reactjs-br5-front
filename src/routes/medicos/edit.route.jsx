import React, { Component } from 'react';
import NavegadorComponente from '../../components/navegador/navegadorComponente';
import _s from '../../service/chamada';
import _f from '../../util/formfast';

class RouteEditMedicos extends Component {


    constructor(props) {
        super(props);

        this.state = {
            medicoData: {},
            especs: [],

            medNome: '',
            medCrm: '',
            medEsc: []
        }
    }


    componentDidMount = async () => {
        const idMedico = (this.props.match.params.id);
        const medicosLista = JSON.parse(await _s.getc({}, 'medico/id/' + idMedico));

        this.setState({ medNome: medicosLista.nome, medCrm: medicosLista.crm, medEsc: medicosLista.especialidades });
        const especsLista = JSON.parse(await _s.getc({}, 'especialidade/'));
        this.setState({ especs: especsLista });
    }


    handleAddEspc = (event) => {
        event.preventDefault();

        const obj = _f.getObject(event.target);

        console.log(obj);

        let arrEspcs = this.state.medEsc;

        const novaEspc = {
            _id: obj.espcs.split('_')[0],
            nome: obj.espcs.split('_')[1]
        }
        arrEspcs.push(novaEspc);

        this.setState({ medEsc: arrEspcs });
    }

    handleSubmitNovo = async (event) => {
        event.preventDefault();

        const request = _f.getObject(event.target);

        
    }


    render() {
        return (
            <NavegadorComponente nomeRota="Editar Médico" subTexto="Lorem ipsum dolor.">
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="form-group">
                                <label className="mb-0 text-secondary d-block"> Nome </label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="mb-0 text-secondary d-block"> CRM </label>
                                <input type="text" className="form-control" />
                            </div>

                        </form>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="mb-0 text-secondary d-block"> Especialidades </label>

                            <form onSubmit={this.handleAddEspc} className="d-flex">
                                <select className="form-control" name="espcs">
                                    {
                                        this.state.especs ? (
                                            this.state.especs.map((espc) =>
                                                <option value={`${espc._id}_${espc.nome}`}>{espc.nome}</option>
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
                                    this.state.medEsc ? (
                                        this.state.medEsc.map((espc) =>
                                            <h6 className="text-center"> {espc.nome} </h6>
                                        )
                                    ) : ('')

                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </NavegadorComponente>
        );
    }
}

export default RouteEditMedicos;