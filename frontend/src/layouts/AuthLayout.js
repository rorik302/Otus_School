import React from 'react';

class AuthLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

export default AuthLayout