import React, {Component} from 'react'
import {render} from 'react-dom'
// import Routes from './config/routes'
import Main from './containers/Main'
import Routes from './config/routes'

// import './css/bootstrap.min.css'
import './css/style.css'
import './css/flag-icon.min.css'

render(<Routes/>, document.getElementById('app'))
