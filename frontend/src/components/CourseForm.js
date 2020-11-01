import React from 'react'
import axios from 'axios'

import {Select} from "antd";

const {Option} = Select

class CourseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            duration: 0,
            startDate: '',
            teachers: [],
            modules: [],
            selectedTeachers: [],
            selectedModules: []
        }
        this.submitForm = this.submitForm.bind(this)
    }

    componentDidMount() {
        axios.get(`/api/teachers/`)
            .then(response => {
                let teachers = []
                response.data.map(teacher => teachers.push(<Option
                    key={teacher.id}>{teacher.first_name} {teacher.last_name}</Option>))
                this.setState({teachers: teachers})
            })

        axios.get(`/api/modules/`)
            .then(response => {
                let modules = []
                response.data.map(module => modules.push(<Option key={module.id}>{module.title}</Option>))
                this.setState({modules: modules})
            })
    }

    submitForm(event) {
        event.preventDefault()

        let formData = new FormData()
        formData.append('title', this.state.title)
        formData.append('description', this.state.description)
        formData.append('startDate', this.state.startDate)
        formData.append('duration', this.state.duration)
        formData.append('teachers', this.state.selectedTeachers)
        formData.append('modules', this.state.selectedModules)

        axios.post(`/api/courses/`, formData)

        document.location.href = '/'
    }

    render() {
        return (
            <form name="courseCreateForm" method="post" onSubmit={this.submitForm}>
                <div className="row mx-0 mb-3">
                    <div className="col-3 d-flex justify-content-end align-items-center">Заголовок</div>
                    <div className="col-9">
                        <input type="text" name="title" className="form-control" onChange={(event) => {
                            this.setState({title: event.target.value})
                        }}/>
                    </div>
                </div>

                <div className="row mx-0 mb-3">
                    <div className="col-3 d-flex justify-content-end align-items-center">Описание</div>
                    <div className="col-9">
            <textarea name="description" className="form-control" onChange={(event) => {
                this.setState({description: event.target.value})
            }}/>
                    </div>
                </div>

                <div className="row mx-0 mb-3">
                    <div className="col-3 d-flex justify-content-end align-items-center">Дата начала</div>
                    <div className="col-9">
                        <input name="startDate" value={this.state.startDate} type="date" className="form-control"
                               onChange={event => {
                                   this.setState({startDate: event.target.value})
                               }}/>
                    </div>
                </div>

                <div className="row mx-0 mb-3">
                    <div className="col-3 d-flex justify-content-end align-items-center">Продолжительность</div>
                    <div className="col-9">
                        <input name="duration" value={this.state.duration} type="number" className="form-control"
                               onChange={event => {
                                   this.setState({duration: event.target.value})
                               }}/>
                    </div>
                </div>

                <div className="row mx-0 mb-3">
                    <div className="col-3 d-flex justify-content-end align-items-center">Преподаватели</div>
                    <div className="col-9">
                        <Select style={{width: '100%'}} mode="multiple"
                                onChange={value => this.setState({selectedTeachers: value})}>
                            {this.state.teachers}
                        </Select>
                    </div>
                </div>

                <div className="row mx-0 mb-3">
                    <div className="col-3 d-flex justify-content-end align-items-center">Модули</div>
                    <div className="col-9">
                        <Select style={{width: '100%'}} mode="multiple"
                                onChange={value => this.setState({selectedModules: value})}>
                            {this.state.modules}
                        </Select>
                    </div>
                </div>

                <input type="submit" className="btn btn-success" value="Отправить"/>
            </form>
        );
    }
}

export default CourseForm