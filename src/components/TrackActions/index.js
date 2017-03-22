import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import ButtonGhost from '../ButtonGhost'
const TrackActions=({onOpenComments,onAddTrackToPlaylist})=>{
    const isSmall=true
    return(
        <div className='track-action-list'>
            <div className='track-action-list-item'>
                <ButtonGhost isSmall={isSmall} onClick={onAddTrackToPlaylist}>
                    <i className='fa fa-th-list' />Add to Playlist
                    </ButtonGhost>
                </div>
                <div className='track-action-list-item'>
                    <ButtonGhost isSmall={isSmall} onClick={onOpenComments}>
                        <i className='fa fa-comment' />Comment
                        </ButtonGhost>
                       </div>
            </div>
    )
    
}
const mapStateToProps=(state,props)=>{
        return{
            activity:props.activity
        }
    }

    const mapDispatchToProps=(dispatch,props)=>{
        const {activity} = props
        return{
            onOpenComments:()=>bindActionCreators(actions.openComments,dispatch)(activity.id),
            onTrackToPlaylist:()=>bindActionCreators(actions.addTrackToPlaylist,dispatch)(activity.id)
      }
    }

    TrackActions.propTypes={
        onOpenComments:React.PropTypes.func,
        addTrackToPlaylist:React.PropTypes.func
    }
    export default connect(mapStateToProps,mapDispatchToProps)(TrackActions);