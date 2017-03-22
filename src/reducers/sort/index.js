import * as actionTypes from '../../constants/actionTypes'
import * as sortTypes from '../../constants/sortTypes'
const sort=(state={sortType:sortTypes.NONE},action)=>{
    switch(action.type){
        case actionTypes.SORT_STREAM:
        return{
            ...state,sortType:action.sortType
        }
        default:
        return state;
    }
}
export default sort;