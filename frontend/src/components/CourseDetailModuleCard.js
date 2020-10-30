import React from 'react'

const CourseDetailModuleCard = (props) => {
    const {module} = props

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
    );
  }

export default CourseDetailModuleCard