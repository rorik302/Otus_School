import React from 'react';
import ContactForm from "../components/ContactForm";

class Contacts extends React.Component {
  componentDidMount() {
    document.title = 'Контакты'
  }

  render() {
    return (
      <>
        <h1>Контакты</h1>

        <ContactForm/>
      </>
    )
  }
}

export default Contacts