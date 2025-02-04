import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import './Login.css'

const handleLogin = async () => {

    try {
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        })

        const data = await response.json()

        if (response.ok) {
            alert("Login exitoso")
            console.log(data.user)
        } else {
            alert("Credenciales incorrectas")
        }
    } catch (error) {
        console.error("Error en la solicitud: ", error)
    }
}

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })
    
            const data = await response.json()
    
            if (response.ok) {
                alert("Login exitoso")
                console.log(data.user)
            } else {
                alert("Credenciales incorrectas")
            }
        } catch (error) {
            console.error("Error en la solicitud: ", error)
        } 
    }

    return (
        <div className="login-container">
            <div className="top-container">
                <Link to="/" className='back-home'>Volver</Link>
                <h2 className="title">YoAmoPDF</h2>
                <h4 className="subtitle">Creado por Feralco</h4>
            </div>

            <form onSubmit={handleLogin} className="login-form">
                <input className='login-input' value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Ingrese su nombre de usuario' />
                <input className='login-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Ingrese su contraseña' />

                <p className="advice">
                    ¿No tienes una cuenta? <Link to="/register" className='link-register'>¡Regístrate!</Link>
                </p>
                <button type="submit">Iniciar sesión</button>
                <Link to="/loadpdf" className='login-btn'>
                    Iniciar sesión
                </Link>
            </form>

        </div>
    )
}

export default Login