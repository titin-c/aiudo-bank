
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';

import { Link } from 'react-router-dom';

import useToggle from '../../hooks/useToogle';

import { FaUserCircle, FaBars } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import 'animate.css';


export const PanelLayout = ({ children, title = '' }) => {

  //obtenemos del state el valor de la cuenta y el valor del préstamo
  const { totalPrestamo, totalCount } = useSelector(state => state.bankActions);
  //El valor total de las posiciones es la suma de los dos productos bancarios, la cuenta y el préstamo.
  const totalPositions = totalPrestamo + totalCount;

  //obtenemos el nombre y el avatar del state del auth
  const { displayName, photoURL } = useSelector(state => state.auth)

  const dispatch = useDispatch();

  //función para desloguearse con el dispatch de la acción.
  const onLogout = () => {
    dispatch(startLogout())
  }
//toogle para cerrar y abrir el menú
  const { toggled, setToggle } = useToggle(false);

  return (
    <main className="main  panel">
      <div className="container">

        <div className="card  animate__animated animate__fadeIn animate__faster">
          <header className="panel_header">
            <div className="panel_header-user">
              <div className="user">
                <span className="user_icon">{!!photoURL ? <img src={photoURL} className="user_avatar" width="36" height="36" /> : <FaUserCircle />}</span>
                <span className="user_name">{displayName}</span>
              </div>
              <div className="panel_header-menu-container"><button className="btn btn-dark" onClick={() => setToggle(!toggled)} ><FaBars /></button>
                <div className={`panel_header-menu ${toggled && 'active  animate__animated animate__fadeInDown animate__faster'} `} >
                  <div className="panel_header-menu-header">{displayName}</div>
                  <div className="panel_header-menu-item"><button className="btn btn-primary btn-small block" onClick={onLogout} >Cerrar sesión  <FiLogOut /></button>
                  </div>
                </div>
              </div>

            </div>
            <div className="panel_header-total">
              <small>Total:</small>
              <span className={`cantidad ${totalPositions < 0 ? 'deuda' : ''}`}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalPositions)}</span>
              <small>*Suma total de sus posiciones</small>
            </div>
          </header>


          {children}

        </div>
        <footer>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.82 253.63"><defs><style></style></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><path className="cls-1" d="M86.68,33.43l-.92,3,.39.33c.48-.51,1-1,1.44-1.52a13.31,13.31,0,0,1,10.1-4.56c1.87,0,2.47.79,2.5,2.54.1,4.06-1.07,6.89-5.47,12.53,1.52,2.27,3.12,4.58,4.65,6.94,3.8,5.88,5.51,12.47,6.15,19.34a42.93,42.93,0,0,0,9.92,23.68,9.64,9.64,0,0,1,.82,1.31c-2.38,2.44-4.94,1.51-7.9.4a51.44,51.44,0,0,0,6.4,20c-2.23,2.5-4.85,1.71-7.83,1,.2,1.4.36,2.57.52,3.74,2.09,14.88,8.23,27.58,19.91,37.38,4.14,3.48,8.09,7.2,12.1,10.84C152.24,182,161.31,195.84,164.53,213c1.08,5.79,1,11.8,1.42,17.72.07,1,0,2.07,0,3.17,13.6-2.85,20.68-11.77,20.68-24.18,0-6.72-2.65-12.56-6.18-18.11-4.76-7.47-10-14.72-13.92-22.6-5.1-10.23-7-21.26-3.51-32.56,3.62-11.85,14.83-21,26.11-21.64,11.92-.66,21.05,6.42,21.94,18.32.75,10,.06,20.18,0,30.28a2.4,2.4,0,0,0,.24,1.25c2.46-7.2,3.08-14.69,3.38-22.8a17.93,17.93,0,0,1,5,11.87c.82,12.44-5,26.87-14.48,35.74l-.35-3.68c-.54-5.93-2.66-11.31-5.42-16.55a44.51,44.51,0,0,1-4-10.35c-1.76-7.44.29-13.75,7-18,1.92-1.22,2.3-2.62,1.93-4.66-1.06-5.93-2.42-11.67-9.3-13.54s-15.2,1-19.54,6.74c-4.77,6.27-5.9,13.56-5.57,21.17.43,10,4.22,18.75,10.56,26.45a100.4,100.4,0,0,1,6.26,8.28c8.94,13.44,10.52,27.64,3.66,42.39-3.09,6.62-8.95,10.66-15.1,14.17-2.85,1.62-5.9,2.89-8.77,4.46-3.09,1.69-6,3.71-9.14,5.29a14.6,14.6,0,0,1-6.11,1.89c-26.73.13-53.45.06-80.17.13a3.82,3.82,0,0,1-3.84-2.11c-4.54-7.89-1.16-15.84,7.68-17.85,6.86-1.56,13.59.09,20.37.74s13.56,1.09,20.49,1.25c-9.89-3.22-17-9.23-20.17-19.21s-1.12-19.07,5.52-27.18l-.64-.57c-1.83,1.67-4,3.08-5.39,5.07-1.6,2.34-3.27,2.9-6,2.48a43.14,43.14,0,0,1-15.36-5.31c9.2-5.65,13-13.36,9.79-24.33-.28,2.54-.57,4.5-.7,6.46a15.59,15.59,0,0,1-6.24,11.57c-1.87,1.5-3.73,3-5.49,4.64-3.23,3-4.93,6.55-3.7,11,.62,2.21,0,3.5-1.83,4.87-13.46,10.23-19.52,24.37-21.19,40.76-.09.88-.19,1.76-.31,2.64-.7,5-.71,5-6,5H1.19C.1,249.75-.46,246.12.48,242.38c1.26-5,3.86-7,9-7.36s10-.85,15.07-1.25a2.59,2.59,0,0,0,2.59-2.46c3.22-16,5.75-32.13,6.38-48.48a68.92,68.92,0,0,0-.64-9.82c-1-9.65,2.61-17.25,10.87-22,6.87-4,14.25-7.07,21.44-10.49,3.12-1.48,6.36-2.71,9.49-4.18,8-3.75,12.82-10.33,16.23-18.81a7.59,7.59,0,0,0-1.29.9c-8.17,10.27-19.17,16.34-31,21.4a125.79,125.79,0,0,0-17.28,8.79c-10.44,6.54-13.23,12.92-11.91,25.91-3.66-5.64-6.73-10.77-8.17-16.6-4.17-17,1.26-31.11,13.52-42.91,3.25-3.13,7-5.71,10.51-8.59,8-6.63,10.22-10.21,12.5-20.18,8-1.06,14.82-4.09,17.27-12.89-.95,1.11-1.82,2.3-2.86,3.32a20.34,20.34,0,0,1-14.9,6Q47,82.56,36.58,82.2A4.27,4.27,0,0,0,32,84.84a10.77,10.77,0,0,1-9.29,6.28,17.57,17.57,0,0,0,.67-3.54,38.56,38.56,0,0,0-.57-7.38c-.73-3.38-.64-6.54,1.32-9.44.92-1.37.57-2.18-.63-3.08a10.34,10.34,0,0,1-4-7.21A27.07,27.07,0,0,0,17,53.56c-1.71-3.68-.8-6.54,3.07-7.78,7.33-2.36,14.74-4.47,22.12-6.69a7.77,7.77,0,0,0,2.7-1,24.74,24.74,0,0,1,16-5.56c7.8,0,15.6.26,23.41.43A16.81,16.81,0,0,1,86.68,33.43Z" /><path className="cls-1" d="M62,12.88,70.14,0l8.13,12.6c-.9,1-1.8,1.78-2.54,2.74a7,7,0,0,0-.1,8.4A6.11,6.11,0,0,0,83.16,25c2.29-1.13,3.07-3.22,3.12-5.49.07-2.69,1.35-4.12,3.72-5.12,2.68-1.12,5.23-2.56,8.51-4.2-1.43,3.26-2.57,5.88-3.73,8.49-1.4,3.16-2.73,6.36-4.31,9.43A3.5,3.5,0,0,1,88,29.77q-17.7.15-35.41,0a3,3,0,0,1-2.36-1.07c-2.77-5.91-5.37-11.91-8.32-18.55,4.06,2,7.61,3.61,10.88,5.62.87.54,1,2.43,1.27,3.74.4,2.26,1,4.34,3.23,5.47a6,6,0,0,0,7.51-1.29,6.86,6.86,0,0,0-.1-8.4A20.75,20.75,0,0,0,62,12.88Z" /></g></g></svg>
          <small>Aviso Legal - Política de privacidad - <Link onClick={onLogout}>Deslogarse</Link>  <br />
            Titín Colomer © 2023 - Todos los derechos reservados</small>
        </footer>
      </div>

    </main>
  )
}
