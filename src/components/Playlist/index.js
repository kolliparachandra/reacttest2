import React from 'react'
import map from '../../services/map'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import * as toggleTypes from '../../constants/toggleTypes'
import { TrackPlaylistContainer } from '../Track'
import ButtonInline from '../../components/ButtonInline'

const PlaylistItem = ({ activity }) => <li><TrackPlaylistContainer activity={activity} /></li>

const PlaylistMenu = ({ onClearPlaylist }) => {
    return (
        <div className='playlist-menu'>
            <div>Player Queue</div>
            <div>
                <ButtonInline onClick={onClearPlaylist}>
                    Clear Queue
                    </ButtonInline>
            </div>
        </div>
    )
}

const Playlist=({toggle,playlist,trackEntities,onClearPlaylist})=>{
    const playlistClass=classNames(
        'playlist',
        {
            'playlist-visible':toggle[toggleTypes.PLAYLIST]
        }
    )

    return(
        <div className={playlistClass}>
            <PlaylistMenu onClearPlaylist={onClearPlaylist}/>
            <ul>
                {map((id,key)=>{
                    return <PlaylistItem key={key} activity={trackEntities[id]} />
                },playlist)}
                </ul>
                </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        toggle:state.toggle,
        playlist:state.player.playlist,
        trackEntities:state.entities.tracks
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onClearPlaylist:bindActionCreators(actions.clearPlaylist,dispatch)
    }
}

Playlist.propTypes={
    toggle:React.PropTypes.object,
    playlist:React.PropTypes.array,
    trackEntities:React.PropTypes.object,
    onClearPlaylist:React.PropTypes.func
}
export default connect(mapStateToProps,mapDispatchToProps)(Playlist)
