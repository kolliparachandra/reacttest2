import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Stream from './components/stream/index'
import configureStore from './configureStore'
import * as actions from './actions'

const tracks=[
    {
        title:'some track'
    },
    {
        title:'some other track'
    }
];
const store = configureStore();
store.dispatch(actions.setTrack(tracks))
ReactDOM.render(
<Provider store={store}>
<Stream /></Provider>,document.getElementById('app'))
module.hot.accept();