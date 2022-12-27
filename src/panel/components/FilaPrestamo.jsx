import { useSelector } from 'react-redux';


export const FilaPrestamo = () => {
    const { totalPrestamo } = useSelector(state => state.bankActions);
    const {displayName} = useSelector(state => state.auth);

  return (
    <div className="cuenta animate__animated animate__fadeInDown  animate__faster">
            <div className="cuenta_card">
            <div className="cuenta_card-left">
          <div className="cuenta_card-top">
            {/* TODO: Esto viene del auth... lo suyo es que viniese de los productos del objeto user */}
            <div className="cuenta_card-top-nombre">Préstamo de {displayName}</div>
            <div className="cuenta_card-top-total">
              {/* Formateamos la cantidad como moneda euro */}
            <span className={`cantidad ${totalPrestamo < 0 ? 'deuda' : ''}`}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalPrestamo)}</span>
          </div>

            
          </div>
          {/* TODO: Esto está puesto en duro... lo suyo es que viniese de los productos del objeto user */}
          <div className="cuenta_card-detalle">ES12 1234 1234 12 9876543210</div>
        </div>
        

            </div>
            
          </div>
  )
}
