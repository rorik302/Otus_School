import React from 'react';
import axios from 'axios';

class CoursesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        document.title = 'Все курсы'
        axios.get('api/study/courses/')
            .then(response => this.setState({courses: response.data}))
    }

    render() {
        return (
            <>
                <h1>Список курсов </h1>

                {this.state.courses.map(course => {
                    return (
                        <div className="card" key={course.id}>
                            <div className="card__header">
                                <span className="card__title">{course.title}</span>
                            </div>
                            <div className="card__body">
                                <p>{course.description}</p>
                            </div>
                            <div className="card__footer">
                                <span>Продолжительность: {Math.floor(course.duration / 7)} нед.</span>
                                <button>Подробнее</button>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default CoursesList