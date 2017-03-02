import * as actionTypes from '../constants/actionTypes'
const auth=(state=[],action)=>{
    switch(action.type){
        case actionTypes.ME_SET:{
            return [...state,user];
        }
        default:
            return state;
    }
}
