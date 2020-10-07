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
      <div>
        <h1>Список курсов</h1>

        <section>
          {this.state.courses.map(course => {
            return (
              <article className="card mb-3 shadow-sm">
                <div className="card-body">
                  <h4>{course.title}</h4>
                  <p>{course.description}</p>
                  <a href="/courses/:id" className="btn btn-outline-success">Открыть</a>
                </div>
                <footer className="card-footer d-flex justify-content-between small">
                  <span>Продолжительность: {Math.floor(course.duration / 7)} нед.</span>
                  <span>Дата начала: {course.start_date}</span>
                </footer>
              </article>
            );
          })}
        </section>
      </div>
      // <ul>
      //   {this.state.courses.map(course => {
      //     return (
      //       <li key={course.id}>
      //         {course.title}
      //       </li>
      //     );
      //   })}
      // </ul>
    );
  }
}

export default CoursesListPage