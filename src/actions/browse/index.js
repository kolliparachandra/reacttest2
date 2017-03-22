import {schema,normalize} from 'normalizr'
import userSchema from '../../schemas/user'
import trackSchema from '../../schemas/track'
import * as requestTypes from '../../constants/requestTypes'
import * as paginateLinkTypes from '../../constants/paginateLinkTypes'
import {mergeEntities} from '../../actions/entities'
import {setRequestInProcess} from '../../actions/request'
import {setPaginateLink} from '../../actions/paginate'
import {unAuthApiUrl} from '../../services/api'
import * as actions from '../../constants/actionTypes'
export const mergeActivitiesByGenre=(activities,genre)=>{
    return{
        type:actions.MERGE_GENRE_ACTIVITIES,
        activities,
        genre
    }
}
export const fetchActivitiesByGenre=(nextHref,genre)=>(dispatch,getState)=>{
    const requestType= requestTypes.GENRES
    const url=nextHref||unAuthApiUrl(`tracks?linked_partitioning=1&limit=20&offset=0&tags=${genre}`,'&')
    if(getState().request[requestType]) return;

    dispatch(setRequestInProcess(true,requestType))
    return fetch(url)
    .then(response=>response.json())
    .then(data=>{
        const normalized = normalize(data.collection,new schema.Array(trackSchema))
        dispatch(mergeEntities(normalized.entities))
        dispatch(mergeActivitiesByGenre(normalized.result,genre))
        dispatch(setPaginateLink(nextHref,paginateLinkTypes.ACTIVITIES))
        dispatch(setRequestInProcess(false,requestType))
    })
}