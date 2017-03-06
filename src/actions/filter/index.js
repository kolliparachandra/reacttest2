import *  as actionTypes from '../../constants/actionTypes'
export const filterDuration=(filterType)=>{
    return{
        type:actionTypes.FILTER_DURATION,
        filterType
    }
}
export const filterName=(filterNameQuery)=>{
    return{
        type:actionTypes.FILTER_NAME,
        filterNameQuery
    }
}