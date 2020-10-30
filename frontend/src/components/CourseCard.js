import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = (props) => {
    const { course } = props

    return (
        <div className="card mb-3">
            <div className="card-header">
                <span className="card-title">{course.title}</span>
            </div>
            <div className="card-body">
                <p>{course.description}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <span>Продолжительность: {Math.floor(course.duration / 7)} нед.</span>
                <Link to={`courses/${course.id}/`} className="btn btn-link">Подробнее</Link>
            </div>
        </div>
    )
}

export default CourseCard