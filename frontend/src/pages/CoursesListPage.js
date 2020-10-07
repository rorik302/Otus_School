import React from 'react';

class CoursesListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    fetch("/api/study/courses/")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return {placeholder: "Something went wrong!"};
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            courses: data
          };
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.courses.map(course => {
          return (
            <li key={course.id}>
              {course.title}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CoursesListPage