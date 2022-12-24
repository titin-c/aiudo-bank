import { useSelector } from 'react-redux';

export const FilaPrestamo = () => {
    const { totalPrestamo } = useSelector(state => state.bankActions);
    const {displayName} = useSelector(state => state.auth);

  return (
    <div className="cuenta animate__animated animate__fadeInDown  animate__faster">
            <div className="cuenta_card">
            <div className="cuenta_card-left">
          <div className="cuenta_card-top">
            <div className="cuenta_card-top-nombre">Préstamo de {displayName}</div>
            <div className="cuenta_card-detalle">AB12 1234 1234 12 1234567890</div>
          </div>
          <div className="cuenta_card-top-total">
            <span className={`cantidad ${totalPrestamo < 0 ? 'deuda' : ''}`}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalPrestamo)}</span>
          </div>
        </div>
              

            </div>
            
          </div>
  )
}
