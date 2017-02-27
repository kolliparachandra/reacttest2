import React from 'react'
import ReactDOM from 'react-dom'
import Stream from './components/stream'
const tracks=[
    {
        title:'some track'
    },
    {
        title:'some other track'
    }
];
ReactDOM.render(
<Stream tracks={tracks} />,document.getElementById('app'))
module.hot.accept();