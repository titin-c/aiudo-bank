import { useSelector } from 'react-redux';

import { Ingreso } from './Ingreso';
import { Transferencia } from './Transferencia';

import useToggle from '../../hooks/useToogle';

import { CgMoreVerticalAlt, CgMoreAlt } from 'react-icons/cg';
import { Abono } from './Abono';

export const FilaCuenta = () => {

  const { totalCount } = useSelector(state => state.bankActions);
  const { displayName } = useSelector(state => state.auth)

  const { toggled, setToggle } = useToggle(false);


  return (
    <div className="cuenta animate__animated animate__fadeInDown animate__faster">
      <div className="cuenta_card">
        <div className="cuenta_card-left">
          <div className="cuenta_card-top">
            <div className="cuenta_card-top-nombre">Cuenta de {displayName}</div>
            <div className="cuenta_card-top-total">
              <span className={`cantidad ${totalCount < 0 ? 'deuda' : ''}`}>{totalCount}€</span></div>
          </div>

          <div className="cuenta_card-detalle">AB12 1234 1234 12 1234567890</div>



        </div>
        <div className="cuenta_card-right">
          <div className="action-btn" onClick={() => setToggle(!toggled)} >{toggled ? <CgMoreAlt /> : <CgMoreVerticalAlt />}</div>

        </div>

      </div>
      <div className={toggled ? "cuenta_card-acciones  active  animate__animated animate__fadeInUp  animate__faster" : "cuenta_card-acciones"}>
        <div className="tabbed">
          <input type="radio" id="tab21" name="css-tabs2" defaultChecked />
          <input type="radio" id="tab22" name="css-tabs2" />
          <input type="radio" id="tab23" name="css-tabs2" />

          <ul className="tabs">
            <li className="tab"><label htmlFor="tab21" >Ingreso</label></li>
            <li className="tab"><label htmlFor="tab22" >Transferencia</label></li>
            <li className="tab"><label htmlFor="tab23">Abono</label></li>
          </ul>

          <div className="tab-content">
            <h3 className='display-6'>Hacer ingreso en cuenta</h3>
            <Ingreso />
          </div>

          <div className="tab-content">

            <h3 className='display-6'>Hacer un transferencia</h3>

            <Transferencia />
            
          </div>

          <div className="tab-content">
            <h3 className='display-6'>Hacer amortización del préstamo</h3>

            <Abono />
          </div>
        </div>

      </div>
    </div >
  )
}
