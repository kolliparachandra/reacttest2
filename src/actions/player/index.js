import find from 'lodash/fp/find'
import findIndex from 'lodash/fp/findIndex'
import * as actionTypes from '../../constants/actionTypes'
import * as toggleTypes from '../../constants/toggleTypes'
import {resetToggle} from '../../actions/toggle'
import {isSameTrackPlaying,isSameTrack} from '../../services/player'
export const setActiveTrack=(activeTrackId)=>{
    return{
        type:actionTypes.SET_ACTIVE_TRACK,
        activeTrackId
    }
}
export const setIsPlaying=(isPlaying)=>{
    return{
        type:actionTypes.SET_IS_PLAYING,
        isPlaying
    }
}
export const setTrackInPlaylist=(trackId)=>{
    return{
        type:actionTypes.SET_TRACK_IN_PLAYLIST,
        trackId
    }
}
export const removeFromPlaylist=(trackId)=>{
    return{
        type:actionTypes.REMOVE_TRACK_FROM_PLAYLIST,
        trackId
    }
}
export const deactivateTrack=()=>{
    return{
        type:actionTypes.RESET_ACTIVE_TRACK
    }
}

export const emptyPlaylist=()=>{
    return{
        type: actionTypes.RESET_PLAYLIST
    }
}
export const setInShuffleMode=(isInShuffleMode)=>{
    return{
        type:actionTypes.SET_SHUFFLE_MODE,
        isInShuffleMode
    }
}
export const setTrackVolume=(volume)=>{
    return{
        type:actionTypes.SET_VOLUME,
        volume
    }
}
export const clearPlaylist=()=>(dispatch)=>{
    dispatch(emptyPlaylist())
    dispatch(deactivateTrack())
    dispatch(resetToggle(toggleTypes.PLAYLIST))
}

export const isInPlaylist=(playlist,trackId)=>{
    return find(isSameTrack(trackId),playlist)
}
export const togglePlayTrack=(isPlaying)=>(dispatch)=>{
    dispatch(setIsPlaying(isPlaying))
}
export const activateTrack=(trackId)=>(dispatch,getState)=>{
    dispatch(togglePlayTrack(!isSameTrackPlaying(getState().player.activeTrackId,trackId,getState().player.isPlaying)))
    dipatch(setActiveTrack(trackId))
if(!isInPlaylist(getState().player.playlist,trackId)) 
    dispatch(setTrackInPlaylist(trackId))
}
export const addTrackToPlaylist=(track)=>(dispatch,getState)=>{
    const playlist= getState().player.playlist;
    if(!isInPlaylist(playlist,track.trackId)){
        dispatch(setTrackInPlaylist(track.id))
    }
    if(!playlist.length){
        dispatch(activateTrack(track.id))
    }
}
export const getIteratedTrack=(playlist,currentActiveTrackId,iterate)=>playlist[findIndex(isSameTrack(currentActiveTrackId),playlist)+iterate];

export const getRandomTrack=(playlist, currentActiveTrackId)=>{
    const index = findIndex(isSameTrack(currentActiveTrackId),playlist)
    const getRandomIndex=()=>{
        const randNum=Math.floor(Math.random()*playlist.length)
        return randNum === index && playlist.length > 1? getRandomIndex() : randNum;
    }
    return playlist[getRandomIndex()];
}
export const activateIteratedTrack=(currentActiveTrackId,iterate)=>(dispatch,getState)=>{
    const playlist = getState().player.playlist;
    const nextActiveTrackId=getIteratedTrack(playlist,currentActiveTrackId,iterate)
    const isInShuffleMode=geState().player.isInShuffleMode;
    nextActiveTrackId && isInShuffleMode === false?dispatch(activateTrack(nextActiveTrackId)):isInShuffleMode?dispatch(activateTrack(getRandomTrack(playlist,currentActiveTrackId))):dispatch(togglePlayTrack(false))
}
export const removeTrackFromPlaylist=(track)=>(dispatch,getState)=>{
    const activeTrackId=getState().player.activeTrackId
    const isPlaying = getStatea().player.isPlaying;
    const isRelevantTrack=isSameTrackAndPlaying(activeTrackId,track,isPlaying)
    isRelevantTrack?dipatch(activateIteratedTrack(activeTrackId,1)):''
    const playlistSize = getState().player.playlist.length;
    if(playlistSize < 2){
        dispatch(deactivateTrack());
        dispatch(resetToggle(toggleTypes.PLAYLIST))
    }
    dispatch(removeFromPlaylist(track.id))
}
export const toggleShuffleMode=(isInShuffleMode)=>(dispatch)=>{
    dispatch(setInShuffleMode(isInShuffleMode))
}
export const changeVolume=(volume)=>(dispatch)=>{
    dispatch(setTrackVolume(volume))
}