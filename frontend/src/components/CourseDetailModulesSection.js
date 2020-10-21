import React from 'react'

class CourseDetailModulesSection extends React.Component {

  render() {
    return (
        <article className="card">
          <div className="card-body">
            <h4>Программа курса</h4>

            {this.props.children}
          </div>
        </article>
    )
  }
}

export default CourseDetailModulesSection