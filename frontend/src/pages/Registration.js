import React from 'react'
import RegistrationForm from "../components/RegistrationForm";

const Registration = () => {
    return (
        <div className="m-auto card">
            <div className="card-header">Регистрация</div>
            <div className="card-body">
                <RegistrationForm />
            </div>
        </div>
    )
}

export default Registration