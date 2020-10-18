import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar__content">
                    <ul className="navbar__menu">
                        <li className="menu__item">
                            <Link to="/" className="menu__link">Все курсы</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/courses/create" className="menu__link">Добавить курс</Link>
                        </li>
                    </ul>

                    <ul className="navbar__menu">
                        <li className="menu__item">
                            <Link to="/contacts" className="menu__link">Контакты</Link>
                        </li>
                    </ul>

                    <ul className="navbar__menu">
                        <li className="menu__item">
                            <Link to="/login" className="menu__link">Войти</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar