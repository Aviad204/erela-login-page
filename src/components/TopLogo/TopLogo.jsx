import React from 'react'
import isMobileChecker from '../../utils/isMobileChecker'

import "./top-logo.css"

function TopLogo({ isCollapseNav }) {
    const isMobile = isMobileChecker();
    return (
        <>
            {isMobile && !isCollapseNav &&
                <div className='w-100 mb-4 d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <div className='top-logo-circle'></div>
                        <span className='top-logo-title-mobile ps-1'>Erela</span>
                    </div>
                    <div className='top-logo-subtitle-mobile'>
                        Études - Réalisations Électriques et Automatisme
                    </div>
                </div>
            }
            {!isMobile && !isCollapseNav &&
                <div className='top-logo-container'>
                    <div className='top-logo-circle'></div>
                    <span className='top-logo-title ps-1'>ERELA</span>
                </div>
            }
            {isCollapseNav &&
                <div className='top-logo-container'>
                    <div className='top-logo-circle-navbar'></div>
                    <span className='top-logo-title-navbar ps-3'>Erela</span>
                </div>
            }
        </>

    )
}

export default TopLogo