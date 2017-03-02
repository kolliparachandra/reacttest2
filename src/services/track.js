import moment from 'moment'
import * as trackTypes from '../constants/trackTypes'
export const isTrack=(track)=>{
    const {origin,type} = track;
    return origin && type && type !== trackTypes
}