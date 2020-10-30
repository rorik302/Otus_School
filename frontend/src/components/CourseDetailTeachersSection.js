import React from 'react'

const CourseDetailTeachersSection = (props) => {
    return (
        <article className="card mb-3">
            <div className="card-body">
                <h4>Преподаватели</h4>

                <div className="row m-0">
                    {props.children}
                </div>
            </div>
        </article>
    )
}

export default CourseDetailTeachersSection