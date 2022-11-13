import React from 'react'

import {
  Row,
  Col
} from "reactstrap"

import LoginWelcomeCover from "./components/LoginWelcomeCover"
import LoginInformationForm from "./components/LoginInformationForm"
import TradeMarkCopyRights from '../TradeMarkCopyRights/TradeMarkCopyRights'
import TopLogo from '../TopLogo/TopLogo'
import isMobileChecker from '../../utils/isMobileChecker'


const LoginPage = () => {

  const isMobile = isMobileChecker();
  return (
    <Row className="h-100 m-0">
      <Col className="d-none d-lg-flex align-items-center p-4 background-color-for-cover" lg="7" sm="12">
        <LoginWelcomeCover />
      </Col>
      <Col
        className="d-flex flex-column justify-content-center align-items-center auth-bg px-2 p-lg-5 h-100"
        lg="5"
        sm="12"
      >
        {/* Empty div to align space on top */}
        <div className='h-25'></div>
        <div className='w-100 h-50'>
          {isMobile && <TopLogo />}
          <LoginInformationForm />
        </div>
        <div className='h-25 w-100 flex-grow-1 d-flex align-items-end justify-content-center'>
          <TradeMarkCopyRights />
        </div>
      </Col>
    </Row>
  )
}

export default LoginPage
