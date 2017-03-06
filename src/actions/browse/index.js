import {schema,normalize} from 'normalizr'
import trackSchema from '../../schemas/track'
import * as actionTypes from '../../constants/actionTypes'
import * as requestTypes from '../../constants/requestTypes'
import * as paginateLinkTypes from '../../constants/paginateLinkTypes'
import {mergeEntities} from '../../actions/entities'
import {setRequestInProcess} from '../../actions/request'
import {setPaginateLink} from '../../actions/paginate'
import {unauthApiUrl} from '../services/api'
import * as actionTypes from '../constants/actionTypes'
export const mergeActivitiesByGenre=(activities,genre)=>{
    return{
        type:actionTypes.MERGE_GENRE_ACTIVITIES,
        activities,
        genre
    }
}
export const fetchActivitiesByGenre=(nextHref,genre)=>(dispatch,getState)=>{
    const requestType= requestTypes.GENRES
    const url=nextHref||unauthApiUrl(`tracks?linked_partitioning=1&limit=20&offset=0&tags=${genre}`,'&')
    if(getState().request[requestType]) return;

    dispatch(setRequestInProcess(true,requestType))
    return fetch(url)
    .then(response=>response.json())
    .then(data=>{
        const normalized = normalize(data.collection,schema.Array(trackSchema))
        dispatch(mergeEntities(normalized.entities))
        dispatch(mergeActivitiesByGenre(normalized.result,genre))
        dispatch(setPaginateLink(nextHref,paginateLinkTypes.ACTIVITIES))
        dispatch(setRequestInProcess(false,requestType))
    })
}