import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import filter from 'lodash/fp/filter'
import {normalize,schema} from 'normalizr'
import userSchema from '../../schemas/user'
import trackSchema from '../../schemas/track'
import * as trackTypes from '../../constants/trackTypes'
import * as actionTypes from '../../constants/actionTypes'
import * as requestTypes from '../../constants/requestTypes'
import * as paginateLinkTypes from '../../constants/paginateLinkTypes'
import {setRequestInProcess} from '../request'
import {setPaginateLink} from '../paginate'
import {mergeEntities} from '../entities'
import {isTrack,toIdAndType} from '../../services/track'
import {getLazyLoadingUsersUrl} from '../../services/api'

export const mergeFollowings=(followings)=>{
    return{
        type:actionTypes.MERGE_FOLLOWINGS,
        followings
    }
}
export const fetchFollowings=(user,nextHref)=>(dispatch,getState)=>{
    const url=getLazyLoadingUsersUrl(user,nextHref,'followings?limit=20&offset=0')
    if(getState().request[requestTypes.FOLLOWINGS]) return;
    dispatch(setRequestInProcess(true,requestTypes.FOLLOWINGS));
    return fetch(url).
        then(response => response.json()).
        then(data =>{
            const normalized=normalize(data.collection,new schema.Array(userSchema))
            dispatch(mergeEntities(normalized.entities))
            dispatch(mergeFollowings(normalized.result))
            dispatch(setPaginateLink(data.next_href,paginateLinkTypes.FOLLOWINGS))
            dispatch(setRequestInProcess(true,requestTypes.FOLLOWINGS))
        })
}

export const mergeActivities=(activities)=>{
    return{
        type:actionTypes.MERGE_ACTIVITIES,
        activities
    }
}

export const mergeTrackTypesTrack=(tracks)=>{
    return{
        type:actionTypes.MERGE_TRACK_TYPES_TRACK,
        tracks
    }
}

export const mergeTrackTypesRepost=(reposts)=>{
    return{
        type:actionTypes.MERGE_TRACK_TYPES_REPOST,
        reposts
    }
}
export const fetchActivities=(user,nextHref)=>(dispatch,getState)=>{
    const requestType = requestTypes.ACTIVITIES;
    const url=getLazyLoadingUsersUrl(user,nextHref,'followings?limit=20&offset=0')
    if(getState().request[requestType]) return;
    dispatch(setRequestInProcess(true,requestType))
    return fetch(url).
           then(response=>response.json()).
           then(data=>{
               const typeMap=flow(filter(isTrack),map(toIdAndType))(data.collection);
               dispatch(mergeTrackTypesTrack(filter(value =>value.type=== trackTypes.TRACK,typeMap)))
               dispatch(mergeTrackTypesRepost(filter(value =>value.type===trackTypes.TRACK_REPOST,typeMap)))

               const activitiesMap=flow(filter(isTrack),map('origin'))(data.collection)
               const normalized=normalize(activitiesMap,new schema.Array(trackSchema))
               dispatch(mergeEntities(normalized.entities))
               dispatch(mergeActivities(normalized.result))
               dispatch(setPaginateLink(data.next_href,paginateLinkTypes.ACTIVITIES))
               dispatch(setRequestInProcess(false,requestType))
           })
}

export const mergeFollowers=(followers)=>{
    return{
        type:actionTypes.MERGE_FOLLOWERS,
        followers
    }
}

export const fetchFollowers=(user,nextHref)=>(dispatch,getState)=>{
    const requestType=requestTypes.FOLLOWERS;
    const url=getLazyLoadingUsersUrl(user,nextHref,'followers?limit=20&offset=0')
    if(getState().request[requestType]) return;
    dispatch(setRequestInProcess(true,requestType))
    return fetch(url).
           then(response=>response.json()).
           then(data=>{
               const normalized = normalize(data.collection,new schema.Arary(userSchema))
               dispatch(mergeEntities(normalized.entities))
               dispatch(mergeFollowers(normalized.result))
               dispatch(setPaginateLink(data.next_href,paginateLinkTypes.FOLLOWERS))
               dispatch(setRequestInProcess(false,requestType))
           })
}

export const mergeFavorites=(favorites)=>{
    return{
        type:actionTypes.MERGE_FAVORITES,
        favorites
    }
}

export const fetchFavorites=(user,nextHref)=>(dispatch,getState)=>{
    const requestType=requestTypes.FAVORITES
    const url=getLazyLoadingUsersUrl(user,nextHref,'favorites?limit=20&offset=0')
    if(getState().request[requestType]) return;
    dispatch(setRequestInProcess(true,requestType))
    return fetch(url).
           then(response=>response.json()).
           then(data =>{
               const normalized = normalize(data.collection,new schema.Array(trackSchema))
               dispatch(mergeEntities(normalized.entities))
               dispatch(mergeFavorites(normalized.result))
               dispatch(setPaginateLink(data.next_href,paginateLinkTypes.FAVORITES))
               dispatch(setRequestInProcess(false,requestType))
           })
           
}