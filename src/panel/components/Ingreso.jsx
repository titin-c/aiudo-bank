import { useDispatch, useSelector } from 'react-redux';
import {useForm} from '../../hooks/useForm';
import { ingreso } from '../../store/panel/bankActionsSlice';
import { GoInfo } from "react-icons/go";

export const Ingreso = () => {
    const dispatch = useDispatch();
    const { errorMessage } = useSelector(state => state.bankActions);

    const { cantidadIngreso, onInputChange } = useForm({
        cantidadIngreso: ''
      });
    
      const onSubmitIngreso = ( event ) => {
        event.preventDefault();
        dispatch( ingreso( Number(cantidadIngreso) ) );
      }

    return (
        <form onSubmit={onSubmitIngreso}>
            <div className="form-row">
                <label className="form-label" htmlFor="form-control-1">
                    cantidad a ingresar
                </label>
                <div className="input-button">
                    <input
                        className="form-control block"
                        type="number"
                        placeholder="Ej. 300"
                        required=""
                        id="form-control-1"
                        name="cantidadIngreso"
                        value={cantidadIngreso}
                        onChange={onInputChange}
                    />
                    <button className="btn btn-primary" type="submit" >+</button>
                </div>
                <div className={`form-feedback ${errorMessage != '' ? 'error' : ''}`}><GoInfo /> {errorMessage}</div>
            </div>
        </form>
    )
}
