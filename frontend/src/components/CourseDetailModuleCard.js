import React from 'react'

class CourseDetailModuleCard extends React.Component {
  constructor(props) {
    super(props);
    this.module = props.module
  }


  render() {
    return (
        <section className="card mb-3" key={module.id}>
          <div className="card-body">
            <h5>{this.module.title}</h5>
          </div>

          <ul>
            {this.module.lessons && this.module.lessons.map(lesson => {
              return <li key={lesson.id}>{lesson.title}</li>
            })}
          </ul>
        </section>
    );
  }
}

export default CourseDetailModuleCard