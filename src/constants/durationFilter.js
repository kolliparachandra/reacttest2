import moment from 'moment'
import * as filterTypes from '../constants/filterTypes'
export const DURATION_FILTER_NAMES={
    [filterTypes.ALL]:'ALL',
    [filterTypes.FILTER_DURATION_MIX]:'MIX',
    [filterTypes.FILTER_DURATION_TRACK]:'TRACK'
}

export const DURATION_FILTER_FUNCTIONS={
    [filterTypes.ALL]:()=>true,
    [filterTypes.FILTER_DURATION_MIX]:(activity)=>moment.duration(activity).asMinutes() > 15,
    [filterTypes.FILTER_DURATION_TRACK]:(activity)=>moment.duration(activity).asMinutes() < 15
}

