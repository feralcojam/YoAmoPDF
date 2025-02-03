import React, { useState } from 'react'
import './fileUploader.css'

function FileUploader() {

    const [file, setFile] = useState(null);

    function handleUpload() {

    }

    return (
        <div className="container">
            <input type="file" onChange={ (e) => { e.target.files[0] } }/>
            <button className="file-btn" onClick={ handleUpload }>Subir archivo</button>         
        </div>
    )
}

export default FileUploader