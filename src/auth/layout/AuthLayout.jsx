import { Link } from "react-router-dom";
import logo from '../../assets/logo-banco.svg';
import logo2 from '../../assets/logo-banco2.svg'

export const AuthLayout = ({children, title=''}) => {
    return (
        <main className="main  login">
            <div className="container">
                
                        <div className="card">
                            <div className="header-login">
                            <div className="logo"><Link to="/auth/"><img src={logo} /></Link> </div>
                             <h1 className='display-4'>{title}</h1>
                            </div>

                                {children}
                            
                        </div>
                        <footer>
                        <img src={logo2} />
                            <small>Aviso Legal - Política de privacidad <br />
                            Titín Colomer © 2023 - Todos los derechos reservados</small>
                        </footer>
                        
                    </div>
                
        </main>
    )
}
