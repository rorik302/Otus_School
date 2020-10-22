import React from 'react';
import { render } from 'react-dom';
import App from "./components/App";

import 'antd/dist/antd.min.css'

export const HOST = 'http://127.0.0.1:8000'

render(<App/>, document.getElementById('app'))
