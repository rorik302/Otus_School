import React from 'react';
import Navbar from "../components/Navbar";

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
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default MainLayout