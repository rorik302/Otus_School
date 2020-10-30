import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.min.css'

import App from "./components/App";

export const HOST = 'http://127.0.0.1:8000'

ReactDOM.render(<App />, document.getElementById('root'))