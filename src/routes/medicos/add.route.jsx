import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavegadorComponente from '../../components/navegador/navegadorComponente';
import _s from '../../service/chamada';
import _f from '../../util/formfast';

class RouteAddMedico extends Component {


    constructor(props) {
        super(props);

        this.state = {
            medicoData: {},
            especs: [],
            msgLog: '',

            medNome: '',
            medCrm: '',
            medEsc: []
        }
    }


    componentDidMount = async () => {                
        const especsLista = JSON.parse(await _s.getc({}, 'especialidade/'));
        this.setState({ especs: especsLista });
    }


    handleAddEspc = (event) => {
        event.preventDefault();

        const obj = _f.getObject(event.target);

        let arrEspcs = this.state.medEsc;

        const novaEspc = {
            _id: obj.espcs.split('_')[0],
            nome: obj.espcs.split('_')[1]
        }
        arrEspcs.push(novaEspc);

        this.setState({ medEsc: arrEspcs });
    }

    removeEspc = (id) => {

        const newArr = this.state.medEsc.filter(function(item) {
            return item._id !== id
        });

        this.setState({ medEsc: newArr });
    }

    handleSubmitNovo = async (event) => {
        event.preventDefault();

        let especialidades = [];
        for (var i = 0; i < this.state.medEsc.length; i++) {
            especialidades.push(this.state.medEsc[i]._id);
        }        


        const {status, ok} = await _s.post({
            especialidades,
            nome: this.state.medNome,
            CRM: this.state.medCrm,
        }, 'medico/');
                
        if(ok) {
            this.props.history.push('/medicos');
        } else {
            this.setState({ msgLog: 'Erro ...' });    
        }        

    }


    render() {
        return (
            <NavegadorComponente nomeRota="Editar Médico" subTexto="Lorem ipsum dolor.">
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmitNovo}>
                            <div className="form-group">
                                <label className="mb-0 text-secondary d-block" > Nome </label>
                                <input type="text" className="form-control" onChange={(e) => this.setState({ medNome: e.target.value })} value={this.state.medNome} />
                            </div>
                            <div className="form-group">
                                <label className="mb-0 text-secondary d-block"> CRM </label>
                                <input type="number" className="form-control" onChange={(e) => this.setState({ medCrm: e.target.value })} value={this.state.medCrm} />
                            </div>
                            <div className="form-group">
                                <Link to="/medicos" className="btn btn-secondary mr-1 text-white"> Cancelar </Link>
                                <button className="btn btn-primary" type="submit">Adicionar</button>
                                <small className="text-danger"> * {this.state.msgLog} </small>
                            </div>

                        </form>
                    </div>
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
                                    this.state.medEsc ? (
                                        this.state.medEsc.map((espc) =>
                                            <div className="position-relative py-2" key={espc._id}>
                                                <button type="button" onClick={() => this.removeEspc(espc._id)} className="btn btn-link text-danger position-absolute" style={{right: '0px', top: '0px'}}> <i className="fas fa-times"></i> </button>
                                                <h6 className="text-center m-0"> {espc.nome} </h6>                                                
                                            </div>
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

export default RouteAddMedico;