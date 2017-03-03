import * as actionTypes from '../../constants/actionTypes'
import * as sortTypes from '../../constants/sortTypes'
export const sortStream = (sortType)=>{
    return{
        type:actionTypes.SORT_STREAM,
        sortType
    }
}