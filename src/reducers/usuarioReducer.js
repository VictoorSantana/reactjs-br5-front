import { UPDATE_USUARIO } from '../actions/usuarioActions';

export default function usuarioReducer(state = '', 
    {type, payload}) {
    switch(type) {
        case UPDATE_USUARIO:
            return payload.usuario;
        default:
            return state;
        
    }       
}
