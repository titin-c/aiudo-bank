import { useDispatch } from 'react-redux';
import {useForm} from '../../hooks/useForm';
import { ingreso } from '../../store/panel/bankActionsSlice';

export const Ingreso = () => {
    const dispatch = useDispatch();

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
            </div>
        </form>
    )
}
