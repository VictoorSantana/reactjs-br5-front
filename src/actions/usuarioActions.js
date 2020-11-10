export const UPDATE_USUARIO = 'usuarios:updateUsuario';

export function updateusuario(newUsuario) {
    return {
        type: UPDATE_USUARIO,
        payload: {
            usuario: newUsuario
        }
    }
}