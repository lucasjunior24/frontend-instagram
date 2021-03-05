import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router/Router'

import './Styles/main.css'

ReactDOM.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
)