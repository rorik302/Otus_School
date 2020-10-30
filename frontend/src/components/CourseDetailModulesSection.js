import React from 'react'

const CourseDetailModulesSection = (props) => {
    return (
        <article className="card">
            <div className="card-body">
                <h4>Программа курса</h4>

                {props.children}
            </div>
        </article>
    )
}

export default CourseDetailModulesSection