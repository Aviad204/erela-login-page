import { LeftOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import {
    Col,
    CardTitle,
    Form,
    Label,
    Input,
    Button
} from "reactstrap"


import "../ForgotPassword.css"
import "../../Login/Login.css"
import { stringStore } from '../../../stringStore'

const ForgotPasswordForm: FC = () => {
    return (
        <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <div className='d-flex flex-column justify-content-start login-form-title-container'>
                <CardTitle tag="h1" className="login-form-title mb-2">
                    {stringStore.forgotPassword.formTitle}
                </CardTitle>
                <CardTitle tag="h2" className="mb-3 login-form-subtitle">
                    {stringStore.forgotPassword.formSubtitle}
                </CardTitle>
            </div>
            <Form
                className="auth-login-form mt-2"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="mb-3">
                    <Label className="form-label d-flex" for="login-email">
                        {stringStore.userInformation.email}
                    </Label>
                    <Input
                        type="email"
                        id="login-email"
                        placeholder="john@example.com"
                        autoFocus
                    />
                </div>
                <Button className='mt-4' color="primary" block>
                    {stringStore.forgotPassword.sumbit}
                </Button>
                <div className='d-flex justify-content-center align-items-center mt-4 return-button-container'>
                    <LeftOutlined />
                    <span className='ms-2'>
                        {stringStore.forgotPassword.return}
                    </span>
                </div>
            </Form>
        </Col>
    )
}

export default ForgotPasswordForm