import * as actionTypes from '../../constants/actionTypes'
import merge from 'lodash/fp/merge'
const initialState={
    users:{},
    tracks:{}
}
const entities=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.MERGE_ENTITIES:
            return merge(action.entities,state,{})
        case actionTypes.SYNC_ENTITIES:
            return{
                ...state,[action.key]:{...state[action.key],[action.entity.id]:action.entity}
            }
        default:
        return state;
    }
}
export default entities;