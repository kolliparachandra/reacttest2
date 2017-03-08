import * as actionTypes from '../../constants/actionTypes'

const session=(state={session:null,user:null},action)=>{
    switch(action.type){
        case actionTypes.SET_USER:
        return{
            ...state,user:action.user
        }
        case actionTypes.SET_SESSION:
        return{
            ...state,session:action.session
        }
        case actionTypes.RESET_SESSION:
        return{
            ...state,user:null,session:null
        }
        default:
        return state;
    }
}

export default session;