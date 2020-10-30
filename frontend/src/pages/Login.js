import React from 'react'
import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <div className="m-auto card">
            <div className="card-header">Авторизация</div>
            <div className="card-body">
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login