import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import toggleTypes from '../../constants/toggleTypes'
import requestTypes from '../../constants/requestTypes'
import paginateLinkTypes from '../../constants/paginateLinkTypes'
import List from '../List'
const FollowersList=({currentUser,userEntities,followers,nextHref,requestInProcess,isExpanded,onSetToggle,onFetchFollowers})=>{
return(
    <List title='Followers' ids={followers} entities={userEntities} nextHref={nextHref} requestInProcess={requestInProcess} isExpanded={isExpanded} currentUser={currentUser} onToggleMore={()=>onSetToggle(toggleTypes.FOLLOWERS)} onFetchMore={()=>onFetchFollowers(currentUser,nextHref)} kind='USER' />
)
}
const mapStateToProps=(state,props)=>{
    const nextHref= state.paginate[paginateLinkTypes.FOLLOWERS]
    const requestInProcess= state.request[requestTypes.FOLLOWERS]
    const isExpanded=state.toggle[toggleTypes.FOLLOWERS]
    return{
        currentUser:state.session.user,
        userEntities:state.entities.users,
        followers:state.user.followers,
        nextHref,
        requestInProcess,
        isExpanded
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        onSetToggle:bindActionCreators(actions.setToggle,dispatch),
        onFetchFollowers:bindActionCreators(actions.fetchFollowers,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FollowersList)
export {FollowersList}