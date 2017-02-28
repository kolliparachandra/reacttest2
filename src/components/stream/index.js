import React from 'react'
import {connect} from 'react-redux'
import Stream from './presenter'

const mapStateToProps=(state,props)=>{
    return{
        tracks:state.track
    }
}

export default connect(mapStateToProps)(Stream);