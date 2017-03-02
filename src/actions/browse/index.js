import {arrayOf,normalize} from 'normalizr'

import unauthApiUrl from '../services/api'
import * as actionTypes from '../constants/actionTypes'
const setMe=(user)=>{
return{
    type:actionTypes.ME_SET,
    user
}
}

const auth=()=>{
    const initHref=unauthApiUrl(`tracks?linked_partitioning=1&limit=20&offset=0&tags=Techno`,'&')
    fetch(initHref).then(
            (response)=>response.json()).then((data)=>{
                dispatch(setMe(data))
            })
    
}

export default auth;