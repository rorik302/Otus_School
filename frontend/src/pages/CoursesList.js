import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CourseCard from "../components/CourseCard";

const CoursesList = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get(`/api/courses/`)
            .then(response => setCourses(response.data))
    }, [])

    return (
        <>
            <h1>Список курсов</h1>

            {courses && courses.map(course => {
                return (
                    <CourseCard course={course} key={course.id}/>
                )
            })}
        </>
    )
}

export default CoursesList