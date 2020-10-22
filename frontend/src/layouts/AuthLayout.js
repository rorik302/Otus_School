import React from 'react';

class AuthLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="vh-100 d-flex">
                {this.props.children}
            </div>
        )
    }
}

export default AuthLayout