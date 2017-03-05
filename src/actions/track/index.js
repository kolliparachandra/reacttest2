import * as actionTypes from '../../constants/actionTypes'
import {apiUrl} from '../../services/api'
import {mergeFavorites} from '../user'
import {syncEntities} from '../entities'
export const removeFromFavorites=(trackId)=>{
    return{
        type:actionTypes.REMOVE_FROM_FAVORITES,
        trackId
    }
}
export const like=(track)=>(dispatch)=>{
    fetch(apiUrl(`me/favorite/${track.id}`,'?'),{method:track.user_favorite?'delete':'put'}).
    then(response=>response.json()).
    then(data=>{
        track.user_favorite?dispatch(removeFromFavorites(track.id)):dispatch(mergeFavorites([track.id]))

        const updateEntity=Object.assign({},track,{user_favorite:!track.user_favorite})
        dispatch(syncEntities(updateEntity,'tracks'))
    })
}