import React from 'react'

class CourseDetailTeachersSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <article className="card mb-3">
          <div className="card-body">
            <h4>Преподаватели</h4>

            <div className="row m-0">
              {this.props.children}
            </div>
          </div>
        </article>
    )
  }
}

export default CourseDetailTeachersSection