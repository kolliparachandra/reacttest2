import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import CommentExtension from '../CommentExtension'
const TrackExtension =({activity,isOpenComment})=>isOpenComment?<CommentExtension activity={activity} />:null

const mapStateToProps=(state,props)=>{
    const {activity} = props
    return{
        activity,
        isOpenComment:state.comment.openComments[activity.id]
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        openComments:bindActionCreators(actions.openComments,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TrackExtension)