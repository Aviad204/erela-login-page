import React, { FC } from 'react'
import TopLogo from '../../../components/TopLogo/TopLogo'
import ForgotPasswordImg from './images/forgot-password-cover.svg'
import "../ForgotPassword.css"


const ForgotPasswordCover: FC = () => {

    return (
        <div className="w-100 d-lg-flex align-items-center flex-column h-100 justify-content-around">
            <div className="header-container w-100 mb-4">
                <TopLogo />
            </div>

            <div className="w-100 image-container d-lg-flex align-items-center justify-content-center pb-5">
                <img src={ForgotPasswordImg} alt='cover login page' />
            </div>
        </div>
    )
}

export default ForgotPasswordCover