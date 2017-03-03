import * as actionTypes from '../../constants/actionTypes'
export const setRequestInProcess=(inProcess,requestType)=>{
    return{
        type:actionTypes.SET_REQUEST_IN_PROCESS,
        requestType,
        inProcess
    }
}