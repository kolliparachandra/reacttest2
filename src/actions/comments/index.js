import {spec,normalize} from 'normalizr'
import commentSchema from '../../schemas/comment'
import * as actionTypes from '../../constants/actionTypes'
import * as paginateLinkTypes from '../../constants/paginateLinkTypes'
import {mergeEntities} from '../../actions/entities'
import {setRequestInProcess} from '../../actions/request'
import {setPaginateLink} from '../../actions/paginate'
import {getLazyLoadingCommentsUrl} from '../../services/api'
import {getCommentProperty} from '../../services/comment'

export const setOpenComments=(trackId)=>{
    return{
        type:actionTypes.OPEN_COMMENTS,
        trackId
    }
}
export const mergeComments=(comments,trackId)=>{
    return{
        type:actionTypes.MERGE_COMMENTS,
        comments,
        trackId
    }
}

export const fetchComments=(trackId,nextHref)=>(dispatch,getState)=>{
    const requestProperty=getCommentProperty(trackId)
    const url = getLazyLoadingCommentsUrl(nextHref,'tracks/'+trackId+'/comments?linked_partitioning=1&limit=20&offset=0')
    if(getState().request[requestProperty]) return;

    dispatch(setRequestInProcess(true,requestProperty))
     return fetch(url)
     .then(response=>response.json())
     .then(data=>{
         const normalized=normalize(data.collection,new schema.Array(commentSchema))
         dispatch(mergeEntities(normalized.entities))
         dispatch(mergeComments(normalized.result,trackId))
         dispatch(setPaginateLink(data.next_href,paginateLinkTypes.COMMENTS))
         dispatch(setRequestInProcess(false,requestProperty))
     })
    
}
export const openComments=(trackId)=>(dispatch,getState)=>{
    const comments=getState().comment.comments[trackId]
    dispatch(setOpenComments(trackId))
    if(!comments)
        dispatch(fetchComments(trackId))
}