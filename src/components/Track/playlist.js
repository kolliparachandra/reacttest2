import React from 'react'
import Artwork from '../ArtWork'
import Permalink from '../Permalink'
import Actions from '../HoverActions'
import {isSameTrackAndPlaying,isSameTrack} from '../../services/player'
const TrackPlaylist=({
    activity,
    userEntities,
    activeTrackId,
    isPlaying,
    onActivateTrack,
    onRemoveTrackFromPlaylist
})=>{
    if(!activity) return;
    const {user,title,permalink_url,artwork_url}=activity;
    const {avatar_url,username}=userEntities[user];
    const userPermalinkUrl=userEntities[user].permalink_url;
    const trackIsPlaying=isSameTrackAndPlaying(activeTrackId)(activity.id)
    const isVisible = isSameTrack(activeTrackId)(activity.id)

    const configuration=[
        {
            className:trackPlaying?'fa fa-pause':'fa fa-play',
            fn:()=>onActivateTrack(activity.id)
        },
        {
            className:'fa fa-times',
            fn:()=>onRemoveTrackFromPlaylist(activity)
        }
    ]
    return(
        <div className='playlist-track'>
            <div>
                <Artwork image={artwork_url} title={title} optionalImage={avatar_url} size={40} />
                </div>
                <div className='playlist-track-content'>
                    <Permalink link={permalink_url} text={title} title={title}/>
                    <Permalink link={userPermalinkUrl} text={'by: '+ username} title={username}/>
                    <Actions configuration={configuration} isVisible={isVisible} />
            </div>
            </div>
    )
}

TrackPlaylist.propTypes={
    activity:React.PropTypes.object,
    userEntities:React.PropTypes.object,
    isPlaying:React.PropTypes.bool,
    activeTrackId:React.PropTypes.number,
    onActivateTrack:React.PropTypes.func,
    onRemoveTrackFromPlaylist:React.PropTypes.func
}
export default TrackPlaylist;