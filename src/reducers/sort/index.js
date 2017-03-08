import * as actionTypes from '../../constants/actionTypes'
import * as sortTypes from '../../constants/sortTypes'
const sort=(state={sort:sortTypes.NONE},action)=>{
    switch(action.type){
        case actionTypes.SORT_STREAM:
        return{
            ...state,sort:action.sort
        }
        default:
        return state;
    }
}
export default sort;