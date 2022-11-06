import React from 'react'
import {
    Col,
    CardTitle,
    Form,
    Label,
    Input,
    Button
} from "reactstrap"

function LoginInformationForm() {
    return (
        <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
                Connexion à l'administration
            </CardTitle>
            <Form
                className="auth-login-form mt-2"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="mb-1">
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
                <div className="mb-1">
                    <div className="d-flex justify-content-between">
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
                <div className="form-check mb-1">
                    <Input type="checkbox" id="remember-me" />
                    <Label className="form-check-label d-flex" for="remember-me">
                        Se souvenit de moi
                    </Label>
                </div>
                <Button color="primary" block>
                    Connexion
                </Button>
            </Form>
        </Col>
    )
}

export default LoginInformationForm