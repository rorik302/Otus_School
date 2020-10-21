import React from 'react';
import axios from 'axios';

import {HOST} from "../index";


class CourseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {}
    }
  }

  componentDidMount() {
    const {match: {params}} = this.props;

    axios.get(`${HOST}/api/courses/${params.id}/`)
        .then(response => {
          this.setState({course: response.data})
        })

  }

  render() {
    if (this.state.course) {
      const {teachers, modules} = this.state.course

      return (
          <>
            <h1>{this.state.course.title}</h1>

            <p>{this.state.course.description}</p>

            {teachers &&
            <article className="card mb-3">
              <div className="card-body">
                <h4>Преподаватели</h4>

                <div className="row m-0">
                  {teachers && teachers.map(teacher => {
                    return (
                        <section className="card col-2 mr-2 mb-2" key={teacher.id}>
                          <div className="card-body px-0">
                            <img className="img-fluid"
                                 src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                                 alt=""/>
                            <span>{`${teacher.first_name} ${teacher.last_name}`}</span>
                          </div>
                        </section>
                    )
                  })}
                </div>
              </div>
            </article>}

            {modules &&
            <article className="card">
              <div className="card-body">
                <h4>Программа курса</h4>

                {modules && modules.map(module => {
                  return (
                      <section className="card mb-3" key={module.id}>
                        <div className="card-body">
                          <h5>{module.title}</h5>
                        </div>

                        <ul>
                          {module.lessons && module.lessons.map(lesson => {
                            return <li key={lesson.id}>{lesson.title}</li>
                          })}
                        </ul>
                      </section>
                  )
                })}
              </div>
            </article>}
          </>
      )
    }
  }
}

export default CourseDetails
