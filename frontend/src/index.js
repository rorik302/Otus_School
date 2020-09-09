import axios from 'axios'

const HOST = 'http://127.0.0.1:8000'

const createLi = (item) => {
    const li = document.createElement('li');
    li.innerText = item.title;
    return li
}

fetch(`${HOST}/api/study/courses/`)
    .then(response => {
        response.json().then(res => {
            const list = document.querySelector('.courses-list')
            res.map((course => {
                list.appendChild(createLi(course))
            }))
        })
    }).catch(error => console.log(error))

axios.get(`${HOST}/api/study/lessons/`)
    .then(response => {
        const list = document.querySelector('.lessons-list')
        response.data.map((les) => {
            list.appendChild(createLi(les))
        })
    }).catch(error => console.log(error))


