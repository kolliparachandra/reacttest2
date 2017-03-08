import * as actionTypes from '../../constants/actionTypes'
const initialState={
    volume:70,
    isInShuffleMode:false,
    activeTrackId:null,
    isPlaying:false,
    playlist:[]
}
const player=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SET_ACTIVE_TRACK:
        return{
            ...state,activeTrackId:action.activeTrackId
        }
        case actionTypes.RESET_ACTIVE_TRACK:
        return{
            ...state,activeTrackId:null
        }
        case actionTypes.SET_IS_PLAYING:
        return{
            ...state,isPlaying:action.isPlaying
        }
        case actionTypes.SET_TRACK_IN_PLAYLIST:
        return{
           ...state,playlist:[...state.playlist,action.trackId]
        }
        case actionTypes.REMOVE_TRACK_FROM_PLAYLIST:{
            const index = state.playlist.indexOf(action.trackId)
        return{
            ...state,playlist:[...state.playlist.slice(0,index),...state.playlist.slice(index+1)]
        }
        }
        case actionTypes.RESET_PLAYLIST:
        return{
            ...state,playlist:[]
        }
        case actionTypes.SET_SHUFFLE_MODE:
        return{
            ...state,isInShuffleMode:!state.isInShuffleMode
        }
        case actionTypes.SET_VOLUME:
        return{
            ...state,volume:action.volume
        }
        default:
        return state
    }
}

export default player;