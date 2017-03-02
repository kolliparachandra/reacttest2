import 'babel-polyfill'
import {normalize} from 'normalizr'
import * as actionTypes from '../constants/actionTypes'
const setTrack=(tracks)=>(dispatch)=>{
    dispatch({
        type:actionTypes.TRACKS_SET,
        tracks
    })
}
export default setTrack;