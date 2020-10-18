import React from 'react';
import Navbar from "../components/Navbar/Navbar";

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <header>
                    <Navbar/>
                </header>

                <main>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default MainLayout