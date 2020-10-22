import React from 'react';
import LoginForm from "../components/LoginForm";

class Login extends React.Component {
    componentDidMount() {
        document.title = 'Авторизация'
    }

    render() {
        return (
            <div className="m-auto card">
                <div className="card-header">Авторизация</div>
                <div className="card-body">
                  <LoginForm/>
                </div>
            </div>
        )
    }
}

export default Login