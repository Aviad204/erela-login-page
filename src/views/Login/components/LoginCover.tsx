import React, { FC } from 'react'
import TopLogo from '../../../components/TopLogo/TopLogo'
import LoginImg from './images/login-v2.svg'
import "../Login.css"


const LoginWelcomeCover: FC = () => {
    return (
        <div className="w-100 d-lg-flex align-items-center flex-column h-100 justify-content-around">
            <div className="header-container w-100 mb-4">
                <TopLogo />
            </div>

            <div className="w-100 image-container d-lg-flex align-items-center justify-content-center pb-5">
                <img src={LoginImg} alt='cover login page' />
            </div>
        </div>
    )
}

export default LoginWelcomeCover