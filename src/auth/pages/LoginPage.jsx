
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

import { BsGoogle } from 'react-icons/bs';
import { GoAlert } from "react-icons/go";

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();

    // console.log({ email, password })
    dispatch( startLoginWithEmailPassword({ email, password }) );
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title="Acceso a clientes">
      <section>
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <label className="form-label" htmlFor="form-control-1">
              user
            </label>
            <input
              className="form-control block"
              type="email"
              placeholder="Tu correo Electronico..."
              required=""
              id="form-control-1"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="form-control-2">
              Pass
            </label>
            <input
              className="form-control block"
              type="password"
              placeholder="Tu contraseña..."
              required=""
              id="form-control-2"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div className={`form-feedback ${!!errorMessage ? 'error': ''}`}><GoAlert /> { errorMessage }</div>
          <div className="buttons">
            <button
              className={`btn btn-dark block btn-big ${isAuthenticating && 'btn-disabled'}`}
              type="submit"
              disabled={isAuthenticating}
            >
              Acceder
            </button>
            <Link
              className={`btn btn-icon btn-primary btn-big block google ${isAuthenticating && 'btn-disabled'}`}
              onClick={onGoogleSignIn}
            >
              <BsGoogle />Accede con Google
            </Link>
          </div>


        </form>
      </section>
      <section>
        <small>Aun no soy cliente <Link to="/auth/register">Crear cuenta</Link></small>
      </section>

    </AuthLayout>
  )
}
