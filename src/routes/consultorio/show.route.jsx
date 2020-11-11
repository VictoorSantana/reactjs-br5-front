import React, { Component } from 'react';
import NavegadorComponente from '../../components/navegador/navegadorComponente';
import _s from '../../service/chamada';


class RouteShowMedico extends Component {

    constructor(props) {
        super(props);

        this.state = {
            medicoData: {}
        }
    }


    componentDidMount = async () => {
        const idMedico = (this.props.match.params.id);
        const resposta = JSON.parse(await _s.getc({}, 'medico/id/' + idMedico));
        this.setState({ medicoData: resposta });
    }

    render() {
        return (

            <NavegadorComponente nomeRota={`Médico: ${this.state.medicoData.nome ? this.state.medicoData.nome : '...'}`} subTexto={`CRM: ${this.state.medicoData.crm ? this.state.medicoData.crm : '...'}`}>


                <div className="row">
                    <div className="col-md-4">
                        <div className="w-100">
                            <h4 className="text-center text-primary"> Especialidades  </h4>
                            <hr />
                            {
                                this.state.medicoData.especialidades ? (
                                    this.state.medicoData.especialidades.map((espc) =>
                                        <h6 className="text-center"> { espc.nome } </h6>
                                    )
                                ) : ('')

                            }
                        </div>
                    </div>
                </div>
            </NavegadorComponente>

        );
    }
}

export default RouteShowMedico;