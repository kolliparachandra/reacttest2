import * as actionTypes from '../../constants/actionTypes'
export const setPaginateLink=(nextHref,paginateType)=>{
    return{
        type:actionTypes.SET_PAGINATE_LINK,
        paginateType,
        nextHref
    }
}