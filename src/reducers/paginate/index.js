import * as actionTypes from '../../constants/actionTypes'
const paginate=(state={},action)=>{
    switch(action.type){
        case actionTypes.SET_PAGINATE_LINK:
        return{
            ...state,[action.paginateType]:action.nextHref
        }
        default:
        return state;
    }
}
export default paginate;