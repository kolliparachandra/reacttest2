import * as actionTypes from '../../constants/actionTypes'
const request=(state={},action)=>{
    switch(action.type){
        case actionTypes.SET_REQUEST_IN_PROCESS:
                return {
            ...{[action.requestType]:action.inProcess}
        }
        default:
        return state;
    
    }
}
export default request;