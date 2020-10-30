import React from 'react'

const AuthLayout = (props) => {
    return (
        <div className="vh-100 d-flex">
            {props.children}
        </div>
    )
}

export default AuthLayout