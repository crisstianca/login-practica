import React, { useMemo } from 'react'
import { LayoutPrincipalPage } from '../layout/LayoutPrincipalPage'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startFacebookSignIn, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks'

export const LoginPage = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch()
    const { onImputChange, formState } = useForm({
        email: '',
        password: ''
    })

    const isAuthenticating = useMemo( () => status === 'checking', [status]);

    const onSubmit = ( event ) => {
        event.preventDefault();
        const usuario = {  formState  }
        dispatch( startLoginWithEmailPassword( formState.email, formState.password ))
    }

    const googleSignIn = () => {

        dispatch(startGoogleSignIn());
    }
  
    const facebookSingIn = () => {

        dispatch(startFacebookSignIn());
    }
  
    return (
        <LayoutPrincipalPage title="Bienvenido">
        <form onSubmit={ onSubmit }> 
            <div className="mb-4">
                <label htmlFor="email" className="form-label"> Correo electronico </label>
                <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    value={ formState.email }
                    onChange={ onImputChange } 
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label"> Password </label>
                <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    value={ formState.password }
                    onChange={ onImputChange }  
                />
            </div>
            <div className="mb-4 form-check">
                <input type="checkbox" name="connected" className="form-check-input" />
                <label htmlFor="connected" className="form-check-label"> Mantener conectado </label>
            </div>

            <div className="d-grid">
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled = { isAuthenticating }
                > 
                    Inciar sesion 
                </button>
            </div>

            <div>
                <label htmlFor="Crear cuenta"> No tienes cuenta?</label>
                <Link component='' color="inherit" to="/auth/register">
                    Crear una cuenta  
                </Link>
                <br />
                <Link component='' color="inherit" to="">
                    Recordar contrasena 
                </Link>
            </div>
        </form>

        {/* Login Con redes sociales */}

        <div className='container w-100 my-5'>
            <div className='row text-center'>
                <div className='col-12'> Iniciar sesion </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <button 
                        className='btn btn-outline-danger w-100 my-2'
                        onClick={ googleSignIn }
                        disabled = { isAuthenticating }
                    >
                        <div className='row align-items-center'>
                            <div className='col-2 d-none d-md-block img-facebook'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                </svg>
                            </div>
                            <div className='col-12 col-md-10 text center'>
                                Google
                            </div>
                        </div>
                    </button>
                </div>
                <div className='col'>
                    <button 
                        className='btn btn-outline-primary w-100 my-2'
                        onClick={ facebookSingIn }
                        disabled = { isAuthenticating }
                    >
                        <div className='row align-items-center'>
                            <div className='col-2 d-none d-md-block img-google'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                            </div>
                            <div className='col-12 col-md-10 text center'>
                                Facebook
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        </LayoutPrincipalPage>
    )
}
