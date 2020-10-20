import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar bg-secondary">
                <div className="container">
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item px-2">
                            <Link to="/" className="btn btn-light">Все курсы</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/courses/create" className="btn btn-light">Добавить курс</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav flex-row">
                        <li className="nav-item px-2">
                            <Link to="/contacts" className="btn btn-light">Контакты</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav flex-row">
                        <li className="nav-item px-2">
                            <Link to="/login" className="btn btn-light">Войти</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar