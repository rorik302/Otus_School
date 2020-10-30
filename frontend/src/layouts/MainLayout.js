import React from 'react'

import Navbar from "../components/Navbar"

const MainLayout = (props) => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            {props.children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainLayout