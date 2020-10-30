import React from 'react'
import axios from 'axios'

import {HOST} from "../index";

import CourseDetailTeachersSection from "../components/CourseDetailTeachersSection";
import CourseDetailTeacherCard from "../components/CourseDetailTeacherCard";
import CourseDetailModulesSection from "../components/CourseDetailModulesSection";
import CourseDetailModuleCard from "../components/CourseDetailModuleCard";

class CourseDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {}
        }
    }

    componentDidMount() {
        const {match: {params}} = this.props;

        axios.get(`${HOST}/api/courses/${params.id}/`)
            .then(response => {
                this.setState({course: response.data})
            })
    }

    render() {
        if (this.state.course) {
            const {teachers, modules} = this.state.course

            return (
                <>
                    <h1>{this.state.course.title}</h1>

                    <p>{this.state.course.description}</p>

                    {teachers &&
                    <CourseDetailTeachersSection>
                        {teachers && teachers.map(teacher => {
                            return (
                                <CourseDetailTeacherCard key={teacher.id} teacher={teacher}/>
                            )
                        })}
                    </CourseDetailTeachersSection>
                    }

                    {modules &&
                    <CourseDetailModulesSection>
                        {modules && modules.map(module => {
                            return (
                                <CourseDetailModuleCard key={module.id} module={module}/>
                            )
                        })}
                    </CourseDetailModulesSection>
                    }
                </>
            )
        }
    }
}

export default CourseDetails