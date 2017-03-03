import Cookies from 'js-cookie'
import {CLIENT_ID} from '../constants/authentication'

export const unAuthApiUrl = (url,symbol)=>`//api.soundcloud.com/${url}${symbol}client_id=${CLIENT_ID}`

export const apiUrl=(url,symbol)=>Cookies.get('accessToken')?unAuthApiUrl(url,symbol):`//api.soundcloud.com/${url}${symbol}oauth_token=${accessToken}`

export const getLazyLoadingUsersUrl=(user,nextHref,initHref)=> nextHref?apiUrl(nextHref,'&'):apiUrl(user?(`users/${user.id}/${initHref}`,'&'):(`me/${initHref}`,'&'))

export const getLazyLoadingCommentsUrl=(nextHref,initHref)=>nextHref?apiUrl(nextHref,'&'):apiUrl(initHref,'&')
