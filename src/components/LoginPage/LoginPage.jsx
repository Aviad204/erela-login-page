import React from 'react'

import {
  Row,
  Col
} from "reactstrap"

import LoginWelcomeCover from "./components/LoginWelcomeCover"
import LoginInformationForm from "./components/LoginInformationForm"

const LoginPage = () => {
  return (
    <Row className="h-100 m-0">
      <Col className="d-none d-lg-flex align-items-center p-5 background-color-for-cover" lg="7" sm="12">
        <LoginWelcomeCover />
      </Col>
      <Col
        className="d-flex align-items-center auth-bg px-2 p-lg-5"
        lg="5"
        sm="12"
      >
        <LoginInformationForm />
      </Col>
    </Row>
  )
}

export default LoginPage
