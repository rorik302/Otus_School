import React from 'react'

const CourseDetailTeacherCard = (props) => {
    const {teacher} = props

    return (
        <section className="card col-2 mr-2 mb-2" key={teacher.id}>
          <div className="card-body px-0">
            <img className="img-fluid"
                 src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                 alt=""/>
            <span>{`${teacher.first_name} ${teacher.last_name}`}</span>
          </div>
        </section>
    )
  }

export default CourseDetailTeacherCard