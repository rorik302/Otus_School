import React from 'react';
import axios from 'axios';

import {HOST} from "../index";
import CourseCard from "../components/CourseCard";

class CoursesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        document.title = 'Все курсы'
        axios.get(`${HOST}/api/courses/`)
            .then(response => this.setState({courses: response.data}))
    }

    render() {
        return (
            <>
                <h1>Список курсов</h1>

                {this.state.courses.map(course => {
                    return (
                        <CourseCard course={course} key={course.id}/>
                    )
                })}
            </>
        )
    }
}

export default CoursesList