import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'
import { LayoutPrincipalPage } from '../layout/LayoutPrincipalPage'

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { onImputChange, formState } = useForm({
    email: 'ventura.prueba@gmail.com',
    password: '123456',
    displayName: 'Cristian Ventura'
})

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <LayoutPrincipalPage title="Bienvenido">
    <form onSubmit={ onSubmit }> 
      <div className="mb-4">
        <label htmlFor="password" className="form-label"> Nombre completo </label>
        <input 
          type="text" 
          className="form-control" 
          name="displayName" 
          value={ formState.displayName }
          onChange = { onImputChange } 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="form-label"> Correo electronico </label>
        <input 
          type="email" 
          className="form-control" 
          name="email"
          value={ formState.email }
          onChange = { onImputChange } 
          
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label"> Password </label>
        <input 
          type="password" 
          className="form-control" 
          name="password"
          value={ formState.password }
          onChange = { onImputChange } 
        />
      </div>
       

      <div 
        className="d-grid"
        display = { !!errorMessage ? '': 'none'}
      >
        <p className='text-danger'> {errorMessage} </p>
      </div>
      <br />
      <div className="d-grid">
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled = { isCheckingAuthentication }
        > 
          Crear cuenta 
        </button>
      </div>

      <div>
        <br />
        <label htmlFor="Crear cuenta"> Ya tienes cuenta?</label>
        <Link component='' color="inherit" to="/auth/login">
            Inciar Sesion en tu cuenta  
        </Link>
      </div>
    </form>
  </LayoutPrincipalPage>
  )
}
