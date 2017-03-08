import * as actionTypes from '../../constants/actionTypes'
import * as filterTypes from '../../constants/filterTypes'
const initialState={
    durationFilterType:filterTypes.ALL,
filterNameQuery:''
}
const filter=(state=initialState,action)=>{
    switch(action.type){
    case actionTypes.FILTER_DURATION:
    return{
        ...state,durationFilterType:action.filterType
    }
    case actionTypes.FILTER_NAME:
    return{
    ...state,filterNameQuery:action.filterNameQuery
}
default:
    return state;
    }
}
export default filter;