import React from 'react'
import TopLogo from '../../TopLogo/TopLogo'

import "../forgot-password.css"


function ForgotPasswordWelcomeCover() {

    return (
        <div className="w-100 d-lg-flex align-items-center flex-column h-100 justify-content-around">
            <div className="header-container w-100 mb-4">
                <TopLogo />
            </div>

            <div className="w-100 image-container d-lg-flex align-items-center justify-content-center pb-5">
                <img src={require('./images/forgot-password-cover.svg')} alt='cover login page' />
            </div>
        </div>
    )
}

export default ForgotPasswordWelcomeCover