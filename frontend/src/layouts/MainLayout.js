import React from 'react';
import {Link} from "react-router-dom";

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <header>
                    <nav className="navbar bg-secondary">
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <Link to="/" className="nav-link btn btn-light">Все курсы</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/courses/create" className="nav-link btn btn-success">Добавить курс</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacts" className="nav-link btn btn-light">Контакты</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link btn btn-light">Войти</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default MainLayout