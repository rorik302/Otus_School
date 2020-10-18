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
                    <div className="main__content">
                        {this.props.children}
                    </div>
                </main>
            </>
        )
    }
}

export default MainLayout