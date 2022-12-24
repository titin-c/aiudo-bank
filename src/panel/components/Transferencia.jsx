import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { transferencia } from '../../store/panel/bankActionsSlice';

import { GoAlert } from "react-icons/go";
import { getPersonajes } from '../../store/panel';

export const Transferencia = () => {

    useEffect(() => {
        dispatch(getPersonajes());
    }, [])

    const { isLoading, personajes } = useSelector(state => state.rickMorty);

    const { errorMessage } = useSelector(state => state.bankActions);
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
                    <select className="form-control block" type="number" placeholder="Ej. 300" required id="form-control-2" >
                        <option value="">Selecciona destinatario</option>
                        {
                            personajes.map(user => (
                                <option key={user.id} value={user.name}>{user.name}</option>
                            ))
                        }

                    </select>
                    <button className="btn btn-primary" type='submit'>+</button>
                </div>
                <div className={`form-feedback ${errorMessage != '' ? 'error' : ''}`}><GoAlert /> {errorMessage}</div>

            </div>
        </form>
    )
}
