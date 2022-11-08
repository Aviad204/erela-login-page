import React from 'react'

import "../login.css"


function LoginWelcomeCover() {

    return (
        <div className="w-100 d-lg-flex align-items-center justify-content-center flex-column">
            <div className="header-container">
                <p className="m-2 p-1 main-website-name-title">ERELA</p>
            </div>
            <div className="header-container">
                <p className='fs-2'>Etudes - Realisations Electriques et Automatisme</p>
            </div>
            <div className="w-100 image-container d-lg-flex align-items-center justify-content-center">
                <img src={require('./images/login-v2.svg')} alt='cover login page' />
            </div>
        </div>
    )
}

export default LoginWelcomeCover