import { Link } from 'react-router-dom'
import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="top-container">
                <h2 className="title">YoAmoPDF</h2>
                <h4 className="subtitle">Creado por Feralco</h4>
            </div>

            <p className="text-about">
                Comienza a utilizar la mejor herramienta
                para cargar tus archivos PDF <br />
                ¡Y observa sus propiedades del archivo!
            </p>

            <Link to="/login" className='start'>
                ¡Comenzar a utilizarlo!
            </Link>

        </div>
    )
}

export default Home