import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import map from '../../services/map'
import {getCommentProperty} from '../../services/comment'
import ButtonMore from '../ButtonMore'
import ArtWork from '../ArtWork'
import {fromNow} from '../../services/track'
const CommentExtension=({activity,commentIds,commentEntities,userEntities,requestInProcess,nextHref,onFetchComments})=>{
    const moreButtonProps={
        onClick:()=>onFetchComments(activity.id,nextHref),
        isLoading:requestInProcess,
        nextHref
    }
    return(
        <div className='comment-extension'>
        {map((commentId,key)=>{
            const comment=commentEntities[commentId]
            const user = userEntities[comment.user]
            return(
                <div key={key} className='comment-extension-item'>
                    <ArtWork image={user.avatar_url} title={user.username} size={40} />
                    <div className='comment-extension-item-body'>
                        <div className='comment-extension-item-body-header'>
                            <span>{user.username}</span>
                            <span>{fromNow(comment.created_at)}</span>
                            </div>
                            <div>
                                {comment.body}
                                </div>
                                </div>
                                </div>
            )},commentIds)
            }
            </div>
    )
}

const mapStateToProps=(state,props)=>{
    const {activity}=props
    const requestInProcess = state.request[getCommentProperty(activity.id)]
    const nextHref=state.paginate[getCommentProperty(activity.id)]
    return{
        activity,
        commentIds:state.comment.comments[activity.id],
        userEntities:state.entities.users,
        requestInProcess,
        nextHref
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onFetchComments:bindActionCreators(actions.fetchComments,dispatch)
    }
}

CommentExtension.propTypes={
    onFetchComments:React.PropTypes.func,
    activity:React.PropTypes.object,
    commentIds:React.PropTypes.array,
    commentEntities:React.PropTypes.object,
    userEntities:React.PropTypes.object,
    requestInProcess:React.PropTypes.bool,
    nextHref:React.PropTypes.string
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentExtension)