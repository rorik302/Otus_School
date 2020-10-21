import React from 'react'
import axios from 'axios'

import {HOST} from "../index";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      text: ''
    }
    this.handleEmail = this.handleEmail.bind(this)
    this.handleText = this.handleText.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }


  submitForm(event) {
    event.preventDefault()

    let formData = new FormData()
    formData.append('email', event.target.elements.email.value)
    formData.append('text', event.target.elements.text.value)

    axios({
      method: 'post',
      url: `${HOST}/contacts/`,
      data: formData,
      xsrfHeaderName: "X-CSRFToken",
      headers: {
        "content-type": "application/json"
      }
    })
  }

  handleEmail(event) {
    this.setState({email: event.target.value})
  }

  handleText(event) {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.submitForm}>
          <div className="row mx-0 mb-3">
            <div className="col-3 d-flex justify-content-end align-items-center">e-mail</div>
            <div className="col-9">
              <input type="text" name="email" value={this.state.email} className="form-control" onChange={this.handleEmail}/>
            </div>
          </div>

          <div className="row mx-0 mb-3">
            <div className="col-3 d-flex justify-content-end align-items-center">Текст</div>
            <div className="col-9">
              <textarea className="form-control" name="text" rows="10" value={this.state.text} onChange={this.handleText}/>
            </div>
          </div>

          <input type="submit" className="btn btn-success" value="Отправить"/>
        </form>
      </div>
    );
  }
}

export default ContactForm