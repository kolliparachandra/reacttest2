import reduce from 'lodash/fp/reduce'
import * as actionTypes from '../../constants/actionTypes'
const initialState = {
  followings: [],
  activities: [],
  typeReposts: {},
  typeTracks: {},
  followers: [],
  favorites: [],
}
 const user=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.MERGE_FOLLOWINGS:
        return {
            ...state,followings:[...state.followings,...action.followings]
        }
        case actionTypes.REMOVE_FROM_FOLLOWINGS:{
            const index = state.followings.indexOf(action.userId)
        return{
            ...state,followings:[...state.followings.slice(0,index),...state.followings.slice(index+1)]
        }
        }
        case actionTypes.MERGE_ACTIVITIES:
        return{
            ...state,activities:[...state.activities,...action.activities]
        }
        case actionTypes.MERGE_TRACK_TYPES_TRACK:{
            const {typeTracks}= state;
            return{
                ...state,typeTracks:[redce(countByType,typeTracks)(action.tracks)]
            }
        }
        case actionTypes.MERGE_TRACK_TYPES_REPOST:{
            const {typeReposts}=state;
            return{
                ...state,typeReposts:[reduce(countByType,typeReposts)(action.reposts)]
            }
        }
        case actionTypes.MERGE_FOLLOWERS:{
            return{
                ...state,followers:[...state.followers,...action.followers]
            }
        }
        case actionTypes.MERGE_FAVORITES:{
            return{
                ...state,favorites:[...state.favorites,...actions.favorites]
            }
        }
        case actionTypes.REMOVE_FROM_FAVORITES:{
            const index = state.favorites.indexOf(action.userId)
            return{
                ...state,favorites:[...state.slice(0,index),...state.slice(index+1)]
            }
        }
        default:
        return state;
    }
}

const countByType=(result,value)=>{
    /* eslint-disable no-param-reassign */
  result[value.id] = result[value.id] ? result[value.id] + 1 : 1;
  /* eslint-enable no-param-reassign */
    return result;
}
export default user;