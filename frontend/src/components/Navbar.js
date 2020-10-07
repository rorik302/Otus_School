import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar bg-secondary rounded-bottom mb-3 shadow">
        <ul className="navbar-nav flex-row align-items-center">
          <li className="nav-item mr-2">
            <a href="/" className="btn btn-light">Все курсы</a>
          </li>
          <li className="nav-item">
            <a href="/courses/create" className="btn btn-success">Добавить курс</a>
          </li>
        </ul>

        <ul className="navbar-nav flex-row align-items-center">
          <li className="nav-item">
            <a href="/contacts" className="btn btn-light">Контакты</a>
          </li>
        </ul>

        <ul className="navbar-nav flex-row align-items-center">
          <li className="nav-item">
            <a href="/profile" className="btn btn-light mr-3">Профиль</a>
            <a href="/auth/logout" className="btn btn-light mr-3">Выйти</a>
            <a href="/auth/login" className="btn btn-light mr-3">Войти</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar