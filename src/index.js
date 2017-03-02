import SC from 'soundcloud'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import Stream from './components/stream/index'
import configureStore from './configureStore'
import App from './components/app'
import Callback from './components/callback'
import * as actions from './actions'
import {CLIENT_ID,REDIRECT_URI} from './constants/auth'
const tracks=[
    {
        title:'some track'
    },
    {
        title:'some other track'
    }
];
SC.initialize({client_id:CLIENT_ID,redirect_uri:REDIRECT_URI})
const store = configureStore();
store.dispatch(actions.setTrack(tracks))

const history = syncHistoryWithStore(browserHistory,store)

ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
        <Route path='/' component={App}>
        <IndexRoute component={Stream} />
        <Route path='/' component={Stream} />
        <Route path='/callback' component={Callback} />
        </Route>
        </Router>
</Provider>,document.getElementById('app'))
module.hot.accept();