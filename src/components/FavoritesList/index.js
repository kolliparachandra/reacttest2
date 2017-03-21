import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import requestTypes from '../../constants/requestTypes'
import toggleTypes from '../../constants/toggleTypes'
import paginateLinkTypes from '../../constants/paginateLinkTypes'
import List from '../List'

const FavoritesList=({currentUser,trackEntities,favorites,nextHref,requestInProcess,isExpanded,onSetToggle,onFetchFavorites})=>{
return(
    <List title='Favorites' ids={favorites} entities={trackEntities} nextHref={nextHref} requestInProcess={requestInProcess} isExpanded={isExpanded} currentUser={currentUser} onToggleMore={()=>onSetToggle(toggleTypes.FAVORITES)} onFetchMore={()=>onFetchFavorites(currentUser,nextHref)} kind='TRACK'/>
)
}
const mapStateToProps=(state,props)=>{
    const nextHref= state.paginate[paginateLinkTypes.FAVORITES]
    const requestInProcess= state.request[requestTypes.FAVORITES]
    const isExpanded=state.toggle[toggleTypes.FAVORITES]
    return{
    currentUser:state.session.user,
    trackEntities:state.entities.tracks,
    favorites:state.user.favorites,
    nextHref,
    requestInProcess,
    isExpanded
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onSetToggle:bindActionCreators(actions.setToggle,dispatch),
        onFetchFavorites:bindActionCreators(actions.fetchFavorites,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FavoritesList)
export{FavoritesList}