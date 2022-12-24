import { useSelector,useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { abono } from '../../store/panel/bankActionsSlice';

import { GoInfo } from "react-icons/go";

export const Abono = () => {

    const { errorMessage } = useSelector(state => state.bankActions);
    const { displayName } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const { cantidadAbono, onInputChange } = useForm({
        cantidadAbono: ''
    });

    const onSubmitAbono = (event) => {
        event.preventDefault();
        dispatch(abono(Number(cantidadAbono)));
        
    }

    return (
        <form onSubmit={onSubmitAbono}>
            <div className="form-row">
                <label className="form-label" htmlFor="form-control-2">
                    Cantidad a amortizar
                </label>
                <div className="input-button">
                    <input
                        className="form-control block"
                        type="number"
                        placeholder="Ej. 300"
                        required=""
                        id="form-control-2"
                        name="cantidadAbono"
                        value={cantidadAbono}
                        onChange={onInputChange}
                    />
                </div>
            </div>
            <div className="form-row">
                <label className="form-label" htmlFor="form-control-2">
                    Seleccione préstamo
                </label>
                <div className="input-button">
                    <select className="form-control block" type="number" placeholder="Ej. 300" required id="form-control-2" >
                        <option value="">Selecciona préstamo</option>
                        <option value={ `pres-${displayName}` }>Préstamo de { displayName }</option>
                    </select>
                    <button className="btn btn-primary">+</button>
                </div>
                <div className={`form-feedback ${errorMessage!='' ? 'error' : ''}`}><GoInfo /> { errorMessage }</div>
            </div>
        </form>
    )
}
