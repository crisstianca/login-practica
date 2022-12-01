import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers'
import { checkingCredentials, logout, login } from './authSlice'

export const checkingAuthenticated = ( formState ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )

        const result = await singInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ));
        
        dispatch( login({ uid: result.uid, email: result.email, displayName: result.displayName, photoURL: result.photoURL }) );
    }
}

export const startFacebookSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() )

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName }) 
        
        if( !ok ) return dispatch( logout({ errorMessage }))

        dispatch( login({ uid, displayName, email, photoURL }))
    }
}

export const startLoginWithEmailPassword = ( email, password ) => {
    return async( dispatch ) => {
        console.log("Estaoy en los thunks: ", email, password )

        dispatch(checkingCredentials());
        const result  = await loginWithEmailPassword( email, password );

        if( !result.ok ) return dispatch( logout( result ));

        dispatch( login( result ))

    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();

        dispatch( logout());
    }
}