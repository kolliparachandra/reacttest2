import Cookies from 'js-cookie'
import {CLIENT_ID,OAUTH_TOKEN,REDIRECT_URI} from '../../constants/authentication'
import * as actionTypes from '../../constants/actionTypes'
import {apiUrl} from '../../services/api'
import {fetchFollowers,fetchFollowings,fetchFavorites,fetchActivities} from '../../actions/user'
export const setSession=(session)=>{
    return{
        type:actionTypes.SET_SESSION,
        session
    }
}
export const setUser=(user)=>{
    return{
        type:actionTypes.SET_USER,
        user
    }
}

export const resetSession=()=>{
    return{
        type:actionTypes.RESET_SESSION
    }
}

export const fetchUser=()=>(dispatch)=>{
    fetch(apiUrl('me','?')).
    then(response=>response.json()).
    then(me=>{
        dispatch(setUser(me))
        dispatch(fetchActivities())
        dispatch(fetchFavorites(me))
        dispatch(fetchFollowings(me))
        dispatch(fetchFollowers(me))
    })
}

export const login=()=>(dispatch)=>{
    SC.initialize({CLIENT_ID,REDIRECT_URI});
    SC.connect().then(session=>{
        Cookies.set(OAUTH_TOKEN,session.oauth_token)
        dispatch(setSession(session))
        dispatch(fetchUser())
    })
}

export const logout=()=>(dispatch)=>{
    Cookies.remove(OAUTH_TOKEN)
    dispatch(resetSession())
}