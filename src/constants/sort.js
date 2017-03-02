import {orderBy} from 'lodash'
import * as sortTypes from './sortTypes'
export const SORT_NAMES={
    [sortTypes.NONE]:'NONE',
    [sortTypes.SORT_FAVORITES]:'FAVORITES',
    [sortTypes.SORT_PLAYS]:'PLAYS',
    [sortTypes.SORT_REPOSTS]:'REPOSTS'
}

export const SORT_FUNCTIONS={
    [sortTypes.NONE]:(objs)=>objs,
    [sortTypes.SORT_FAVORITES]:(objs)=>orderBy(objs,(obj=>obj.likes_count,'desc')),
    [sortTypes.SORT_PLAYS]:(objs)=>orderBy(objs,(obj=>obj.play_count, 'desc')),
    [sortTypes.SORT_REPOSTS]:(objs)=>orderBy(objs,(obj=>obj.reposts_count,'desc'))
}