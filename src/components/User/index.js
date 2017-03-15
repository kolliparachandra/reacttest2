import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import UserPreview from './preview'
const mapStateToProps=(state,props)=>{
    return{
        followings:state.user.followings,
        user:props.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onFollow:bindActionCreators(actions.follow,dispatch)
    }
}
const UserPreviewContainer=connect(mapStateToProps,mapDispatchToProps)(UserPreview)
export default UserPreviewContainer