import { Link } from 'react-router-dom'
import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div className="register-container">
            <div className="top-container">
                <Link to="/" className='back-home'>Volver</Link>
                <h2 className="title">YoAmoPDF</h2>
                <h4 className="subtitle">Creado por Feralco</h4>
            </div>
            
            <form action="" className="register-form">
                <input className='register-input' type="text" placeholder='Ingrese su nombre de usuario' />
                <input className='register-input' type="email" placeholder='Ingrese su correo' />
                <input className='register-input' type="password" placeholder='Ingrese su contraseña' />

                <p className="advice">
                    ¿Ya tienes una cuenta? <Link to="/login" className='link-login'>Ve aquí.</Link>
                </p>
                <Link to="/login" className='register-btn'>Registrarse</Link>
            </form>

        </div>
    )
}

export default Register