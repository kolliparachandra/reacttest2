import * as actionTypes from '../constants/actionTypes'
const track=(state=[],action)=>{
    switch(action.type){
        case actionTypes.TRACKS_SET:
            const {tracks} = action;
            return [...state,...tracks];
        default:
            return state;
    }
}
export default track;