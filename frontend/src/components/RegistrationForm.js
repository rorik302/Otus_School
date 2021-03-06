import React from 'react'
import axios from 'axios'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    let formData = new FormData()
    formData.append('login', this.state.login)
    formData.append('password', this.state.password)

    axios.post(`/api/students/`, formData)

    document.location.href = '/login'
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row mx-0 mb-3">
          <div className="col-3 d-flex justify-content-end align-items-center">Логин</div>
          <div className="col-9">
            <input type="text" className="form-control" onChange={event => this.setState({login: event.target.value})}/>
          </div>
        </div>

        <div className="row mx-0 mb-3">
          <div className="col-3 d-flex justify-content-end align-items-center">Пароль</div>
          <div className="col-9">
            <input type="password" className="form-control" onChange={event => this.setState({password: event.target.value})}/>
          </div>
        </div>

        <input type="submit" className="btn btn-success" value="Регистрация"/>
      </form>
    );
  }
}

export default RegistrationForm