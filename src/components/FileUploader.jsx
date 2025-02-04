import React, { useState } from 'react'
import './fileUploader.css'

function FileUploader() {

    return (
        <div className="container">
            <input type="file" />
            <button className="file-btn" >Subir archivo</button>         
        </div>
    )
}

export default FileUploader