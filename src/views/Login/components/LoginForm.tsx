import React, { FC } from 'react'
import {
    Col,
    CardTitle,
    Form,
    Label,
    Input,
    Button
} from "reactstrap"

import "../Login.css"

const LoginForm: FC = () => {
    return (
        <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <div className='d-flex flex-column justify-content-start login-form-title-container'>
                <CardTitle tag="h1" className="login-form-title mb-2">
                    Bienvenue sur ERELA!
                </CardTitle>
                <CardTitle tag="h2" className="mb-3 login-form-subtitle">
                    Merci de vous connecter à l’administration
                </CardTitle>
            </div>
            <Form
                className="auth-login-form mt-2"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="mb-3">
                    <Label className="form-label d-flex" for="login-email">
                        Email
                    </Label>
                    <Input
                        type="email"
                        id="login-email"
                        placeholder="john@example.com"
                        autoFocus
                    />
                </div>
                <div className="mb-3">
                    <div className="d-flex justify-content-between ">
                        <Label className="form-label" for="login-password">
                            Mot de passe
                        </Label>
                        <a href="/forgot-password" className='text-decoration-none'>
                            <small>Mot de passe oublie?</small>
                        </a>
                    </div>
                    <Input
                        type="password"
                        className="input-group-merge"
                        id="login-password"
                    />
                </div>
                <div className="form-check mb-3">
                    <Input type="checkbox" id="remember-me" />
                    <Label className="form-check-label d-flex" for="remember-me">
                        Se souvenit de moi
                    </Label>
                </div>
                <Button className='mt-4' color="primary" block>
                    Connexion
                </Button>
            </Form>
        </Col>
    )
}

export default LoginForm