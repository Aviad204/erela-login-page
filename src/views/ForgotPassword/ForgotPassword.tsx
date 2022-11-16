import React, { FC } from 'react'

import {
  Row,
  Col
} from "reactstrap"

import ForgotPasswordCover from "./components/ForgotPasswordCover"
import ForgotPasswordForm from "./components/ForgotPasswordForm"
import TradeMarkCopyRights from '../../components/TradeMarkCopyRights/TradeMarkCopyRights'
import TopLogo from '../../components/TopLogo/TopLogo'
import useMobileChecker from '../../utils/useMobileChecker'


const ForgotPassword: FC = () => {
  const isMobile = useMobileChecker();

  return (
    <Row className="h-100 m-0">
      <Col className="d-none d-lg-flex align-items-center p-4 background-color-for-cover" lg="7" sm="12">
        <ForgotPasswordCover />
      </Col>
      <Col
        className="d-flex flex-column justify-content-center align-items-center auth-bg px-2 p-lg-5 h-100"
        lg="5"
        sm="12"
      >
        {/* Empty div to align space on top */}
        <div className='h-25 mb-5'></div>
        <div className='w-100 h-50'>
          {isMobile && <TopLogo />}
          <ForgotPasswordForm />
        </div>
        <div className='h-25 w-100 flex-grow-1 d-flex align-items-end justify-content-center'>
          <TradeMarkCopyRights />
        </div>
      </Col>
    </Row>
  )
}

export default ForgotPassword
