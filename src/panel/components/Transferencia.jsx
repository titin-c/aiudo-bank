import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getPersonajes, transferencia } from '../../store/panel';

import { useForm } from '../../hooks/useForm';

import { GoInfo } from "react-icons/go";

export const Transferencia = () => {

    useEffect(() => {
        dispatch(getPersonajes());
    }, [])

    const { isLoading, personajes } = useSelector(state => state.rickMorty);

    const { errorMessage, messageType } = useSelector(state => state.bankActions);
    const dispatch = useDispatch();

    const { cantidadTransferencia, onInputChange } = useForm({
        cantidadTransferencia: ''
    });

    const onSubmitTransferencia = (event) => {
        event.preventDefault();
        dispatch(transferencia(Number(cantidadTransferencia)));
    }


    return (
        <form onSubmit={onSubmitTransferencia}>
            <div className="form-row">
                <label className="form-label" htmlFor="form-control-2">
                    Cantidad a transferir
                </label>
                <div className="input-button">
                    <input
                        className="form-control block"
                        type="number"
                        placeholder="Ej. 300"
                        required=""
                        id="form-control-2"
                        name="cantidadTransferencia"
                        value={cantidadTransferencia}
                        onChange={onInputChange}
                    />

                </div>
            </div>
            <div className="form-row">
                <label className="form-label" htmlFor="form-control-2">
                    Seleccione desitnatario
                </label>
                <div className="input-button">

                    {
                    // Si los personajes del API están cargados los muestra en en select
                    isLoading ? 'Cargando...' : 
                    <select className="form-control block" type="number" required id="form-control-2" >
                        <option value="">Selecciona destinatario</option>
                        {
                            // Mapeamos los personajes de Rick y Morti como usuarios a los que hacer las transferencia
                            personajes.map(user => (
                                <option key={user.id} value={user.name}>{user.name}</option>
                            ))
                        }

                    </select>
                    }
                    <button className="btn btn-primary" type='submit'>+</button>
                </div>
                {/* Mostramos u ocultamos los avisos y mensajes al operar */}
                <div className={`form-feedback ${errorMessage != '' ? messageType : ''}`}><GoInfo /> {errorMessage}</div>

            </div>
        </form>
    )
}
