import { FaUserCircle, FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo2 from '../../assets/logo-banco2.svg';
import useToggle from "../../hooks/useToogle";
import { startLogout } from "../../store/auth";


export const PanelLayout = ({ children, title = '' }) => {

  const {displayName, photoURL} = useSelector(state => state.auth)

  const dispatch = useDispatch();

  const onLogout = ()=>{
    dispatch(startLogout())
  }

  const { toggled, setToggle } = useToggle(false);

  return (
    <main className="main  panel">
      <div className="container">

        <div className="card">
          <header className="panel_header">
          <div className="panel_header-user">
            <div className="user">
            <span className="user_icon">{!!photoURL ? <img src={photoURL} className="user_avatar" width="36" height="36"/> :<FaUserCircle />  }</span>
            <span className="user_name">{displayName}</span>
            </div>
            <div className="panel_header-menu-container"><button className="btn btn-dark" onClick={() => setToggle(!toggled)} ><FaBars /></button>
            <div className={`panel_header-menu ${toggled && 'active'}`} > 
            <div className="panel_header-menu-header">{displayName}</div>
            <div className="panel_header-menu-item"><button className="btn btn-primary btn-small block" onClick={onLogout} >Cerrar sesión  <FiLogOut /></button>
            </div>
            </div>
            </div>
           
          </div>
          <div className="panel_header-total">
            <small>Total:</small> 
          89.0000€
          <small>*Suma total de sus posiciones</small>
          </div>
          </header>
          

          {children}

        </div>
        <footer>
                        <img src={logo2} />
                            <small>Aviso Legal - Política de privacidad - <Link onClick={onLogout}>Deslogarse</Link>  <br />
                            Titín Colomer © 2023 - Todos los derechos reservados</small>
                        </footer>
      </div>

    </main>
  )
}
