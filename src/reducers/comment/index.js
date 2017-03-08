import * as actionTypes from '../../constants/actionTypes'
const initialState={
    comments:{},
    openComments:{}
}
const comments=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.OPEN_COMMENTS:{
            const {trackId}=action;
            return{
                ...state,openComments:{...state.openComments ||[],[trackId]:!state.openComments[trackId]}
            }
        }
        case actionTypes.MERGE_COMMENTS:{
            const {comments,trackId}= action;
            return{
                ...state,
                comments:{...state.comments||[],[trackId]:[...state.comments[trackId]||[],...comments]}
            }
        }
        default:
        return state;
    }
}
export default comments;