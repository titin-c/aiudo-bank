
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link  } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

import { startCreatingUserWithEmailPassword } from '../../store/auth/';

import { GoAlert } from "react-icons/go";

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, 
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }


  return (
    <AuthLayout title="Crear cuenta">

      <section>
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <label className="form-label" htmlFor="form-control-1">
              Nombre completo
            </label>
            <input
              className="form-control block"
              type="text"
              placeholder="Escribe tu nombre..."
              required=""
              id="form-control-1"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
            <div className={`form-feedback ${formSubmitted && displayNameValid ? 'error' : ''}`}><GoAlert /> {displayNameValid}</div>
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="form-control-2">
              Email
            </label>
            <input
              className="form-control block"
              type="email"
              placeholder="Tu correo Electronico..."
              required=""
              id="form-control-2"
              name="email"
              value={email}
              onChange={onInputChange}
            />
            <div className={`form-feedback ${formSubmitted && emailValid ? 'error' : ''}`}><GoAlert /> {emailValid}</div>
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="form-control-3">
              Contraseña
            </label>
            <input
              className="form-control block"
              type="password"
              placeholder="Tu contraseña..."
              required=""
              id="form-control-3"
              name="password"
              value={password}
              onChange={onInputChange}
            />
            <div className={`form-feedback ${formSubmitted && passwordValid ? 'error' : ''}`}><GoAlert /> {passwordValid}</div>
          </div>
          <div className="form-row">
            <input type="checkbox" className="form-switch" id="exampleCheck1" />
            <label className="form-label" htmlFor="exampleCheck1">
              <small>Aceptar Terminos Legales</small>
            </label>
          </div>
          <div className={`form-feedback ${!!errorMessage ? 'error': ''}`}><GoAlert /> { errorMessage }</div>
          <button
            className={`btn btn-dark block btn-big ${isCheckingAuthentication && 'btn-disabled'}`}
            type="submit"
            disabled={isCheckingAuthentication}
          >
            Crear cuenta
          </button>

        </form>
      </section>
      <section>
        <small>Ya tengo cuenta <Link to="/auth/login">Ir a Login</Link></small>
      </section>


    </AuthLayout>
  )
}
