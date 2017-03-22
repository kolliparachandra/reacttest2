import {createStore,applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'

const configureStore=(initialState)=>{
    const router=routerMiddleware(browserHistory)
    const middleware=[thunk,router]
    if(process.env.NODE_ENV !== 'production'){
        middleware.push(createLogger())
    }
    const store=createStore(rootReducer,initialState,applyMiddleware(...middleware))
    return store;
}

export default configureStore;