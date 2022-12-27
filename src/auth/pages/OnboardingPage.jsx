import { Link } from "react-router-dom"
import { IoIosFingerPrint } from "react-icons/io";

import { AuthLayout } from "../layout/AuthLayout";

export const OnboardingPage = () => {
    return (
        <AuthLayout title="">
            <section>
                <div className="display-3">Bienvenidos al nuevo Aiudo-Bank</div>
            </section>
            <section>
                <div className="display-6">Nuevas ventajas con nueva App</div>
            </section>
            <section>
                <div className="buttons buttons-huella">
                    <Link className="btn btn-dark block btn-big" to="/auth/login">Login</Link>
                    <button className="btn  btn-dark huella block" to="/auth/login"><IoIosFingerPrint /></button>
                </div>
                <Link className="btn btn-primary block btn-big" to="/auth/register">Nuevo cliente</Link>

            </section>
        </AuthLayout>
    )
}
