import React from 'react'
import RegistrationForm from "../components/RegistrationForm";

class Registration extends React.Component {
  componentDidMount() {
    document.title = 'Регистрация'
  }

  render() {
    return (
      <div className="m-auto card">
        <div className="card-header">Регистрация</div>
        <div className="card-body">
          <RegistrationForm/>
        </div>
      </div>
    )
  }

}

export default Registration