import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import Stream from './presenter'

const mapStateToProps=(state,props)=>{
    return{
        tracks:state.track,
        user:state.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onAuth:bindActionCreators(actions.auth,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Stream);