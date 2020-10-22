import React from 'react';
import CourseForm from "../components/CourseForm";

class CourseCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = 'Добавление курса'
  }

  render() {
    return (
      <>
        <h1>Добавление курса</h1>

        <CourseForm/>
      </>
    )
  }
}

export default CourseCreate