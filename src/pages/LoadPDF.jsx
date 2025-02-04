import React from 'react'
import './LoadPDF.css'
import FileUploader from '../components/FileUploader'

const LoadPDF = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo-container">
                    <img className="logo-pdf" src="/pdf.png" alt="logo-pdf" />
                </div>
                <button className="sign-out">Cerrar sesión</button>
            </div>
            <FileUploader />
        </div>
    )
}

export default LoadPDF