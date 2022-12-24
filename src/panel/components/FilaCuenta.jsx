
import 'animate.css'; 
import { CgMoreVerticalAlt, CgMoreAlt } from "react-icons/cg";
import useToggle from '../../hooks/useToogle';

export const FilaCuenta = () => {
    const { toggled, setToggle } = useToggle(false);
  return (
    <div className="cuenta animate__animated animate__fadeInDown animate__faster">
            <div className="cuenta_card">
              <div className="cuenta_card-left">
                <div className="cuenta_card-top">
                  <div className="cuenta_card-top-nombre">Nombre de la cuenta</div>
                  <div className="cuenta_card-top-total">900€</div>
                </div>

                <div className="cuenta_card-detalle">AB12 1234 1234 12 1234567890</div>



              </div>
              <div className="cuenta_card-right">
                <div className="action-btn"  onClick={() => setToggle(!toggled)} >{toggled ? <CgMoreAlt /> : <CgMoreVerticalAlt />}</div>

              </div>

            </div>
            <div  className={toggled ? "cuenta_card-acciones  active  animate__animated animate__fadeInUp  animate__faster" : "cuenta_card-acciones"}>
              <div className="tabbed">
                <input type="radio" id="tab21" name="css-tabs2" defaultChecked />
                <input type="radio" id="tab22" name="css-tabs2" />
                <input type="radio" id="tab23" name="css-tabs2" />

                <ul className="tabs">
                  <li className="tab"><label htmlFor="tab21">Ingreso</label></li>
                  <li className="tab"><label htmlFor="tab22">Transferencia</label></li>
                  <li className="tab"><label htmlFor="tab23">Abono</label></li>
                </ul>

                <div className="tab-content">
                  <h6>Hacer ingreso en cuenta</h6>
                  <div className="form-row">
                    <label className="form-label" htmlFor="form-control-1">
                      cantidad a ingresar
                    </label>
                    <div className="input-button">
                      <input className="form-control block" type="number" placeholder="Ej. 300" required="" id="for1m-control-" />
                      <button className="btn btn-primary">+</button>
                    </div>

                  </div>
                </div>

                <div className="tab-content">

                  <h6>Hacer un transferencia</h6>

                  <div className="form-row">
                    <label className="form-label" htmlFor="form-control-2">
                      Cantidad a transferir
                    </label>
                    <div className="input-button">
                      <input className="form-control block" type="number" placeholder="Ej. 300" required="" id="form-control-2" />
                    </div>
                  </div>
                  <div className="form-row">
                    <label className="form-label" htmlFor="form-control-2">
                      Seleccione desitnatario
                    </label>
                    <div className="input-button">
                      <select className="form-control block" type="number" placeholder="Ej. 300" required="" id="form-control-2" >
                        <option>Selecciona destinatario</option>
                        <option>destinatario 1</option>
                        <option>destinatario 2</option>
                        <option>destinatario 3</option>
                        <option>destinatario 4</option>
                      </select>
                      <button className="btn btn-primary">+</button>
                    </div>
                  </div>
                </div>

                <div className="tab-content">
                  <h6>Hacer un abono en préstamo</h6>

                  <div className="form-row">
                    <label className="form-label" htmlFor="form-control-2">
                      Cantidad a abonar
                    </label>
                    <div className="input-button">
                      <input className="form-control block" type="number" placeholder="Ej. 300" required="" id="form-control-2" />
                    </div>
                  </div>
                  <div className="form-row">
                    <label className="form-label" htmlFor="form-control-2">
                      Seleccione préstamo
                    </label>
                    <div className="input-button">
                      <select className="form-control block" type="number" placeholder="Ej. 300" required="" id="form-control-2" >
                        <option>Selecciona préstamo</option>
                        <option>destinatario 1</option>
                        <option>destinatario 2</option>
                        <option>destinatario 3</option>
                        <option>destinatario 4</option>
                      </select>
                      <button className="btn btn-primary">+</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
  )
}
