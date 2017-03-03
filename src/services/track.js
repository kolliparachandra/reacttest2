import moment from 'moment'
import max from 'lodash/fp/max'
import map from 'lodash/fp/map'
import * as trackTypes from '../constants/trackTypes'
export const isTrack=(track)=>{
    const {origin,type} = track;
    return origin && type && type !== trackTypes.PLAYLIST && type !== trackTypes.PLAYLIST_REPOST
}
export const toIdAndType=(o)=>{
    return {type:o.type,id:o.origin.id}
}
export const normalizeSamples=(samples)=>{
    let highestValue=max(samples);
    const newSamples = map(samples,(value)=>value/highestValue)
    return newSamples;
}
export const isJsonWaveForm=(waveFormUrl)=>waveFormUrl.indexOf('.json') !== -1;

export const isPngWaveForm=(waveFormUrl)=>waveFormUrl.indexOf('.png') !== -1;

export const fromNow=(createdAt)=>moment(new Date(createdAt)).from(moment());

export const durationFormat=(ms)=>moment.duration(ms).asHours() > 1? (Math.floor(moment.duration(ms).asHours()) + moment.utc(moment.duration(ms).asMilliseconds()).format(':mm:ss')):moment.utc(moment.duration(ms).asMilliseconds()).format(':mm:ss')