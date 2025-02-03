import { Link } from 'react-router-dom'
import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className="login-container">
            <div className="top-container">
                <Link to="/" className='back-home'>Volver</Link>
                <h2 className="title">YoAmoPDF</h2>
                <h4 className="subtitle">Creado por Feralco</h4>
            </div>

            <form action="" className="login-form">
                <input className='login-input' type="text" placeholder='Ingrese su nombre de usuario' />
                <input className='login-input' type="password" placeholder='Ingrese su contraseña' />

                <p className="advice">
                    ¿No tienes una cuenta? <Link to="/register" className='link-register'>¡Regístrate!</Link>
                </p>
                <Link to="/loadpdf" className='login-btn'>
                    Iniciar sesión
                </Link>
            </form>

        </div>
    )
}

export default Login