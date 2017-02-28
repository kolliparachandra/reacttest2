import {createStore,applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const configureStore=(initialState)=>{
    const middleware=[thunk]
    if(process.env.NODE_ENV !== 'production'){
        middleware.push(createLogger())
    }
    const store=createStore(rootReducer,initialState,applyMiddleware(...middleware))
    return store;
}

export default configureStore;