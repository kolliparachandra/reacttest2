import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import * as requestTypes from '../../constants/requestTypes'
import * as paginateLinkTypes from '../../constants/paginateLinkTypes'
import {getAndCombined} from '../../services/filter'
import Activities from '../Activities'
import LoadingSpinner from '../LoadingSpinner'
import StreamInteractions from '../StreamInteractions'
import {DURATION_FILTER_FUNCTIONS} from '../../constants/durationFilter'
import {getTracknameFilter} from '../../constants/sort'
import {SORT_FUNCTIONS} from '../../constants/sort'
const StreamActivities=({
    activities,
    requestInProcess,
    nextHref,
    trackEntities,
    activeFilter,
    activeSort,
    onFetchActivities
})=>{
    return(
        <div>
            <StreamInteractions />
            <Activities isLoading={requestInProcess && !activities}
            entities={trackEntities}
            ids={activities}
            activeFilter={activeFilter}
            activeSort={activeSort}
            scrollFunction={()=>onFetchActivities(null,nextHref)}
            />
            <LoadingSpinner isLoading={!!(requestInProcess && activities)} />
            </div>
    )
}

const mapStateToProps=(state,props)=>{
    const filters=[
        DURATION_FILTER_FUNCTIONS[state.filter.durationFilterType],
        getTracknameFilter(state.filter.filterNameQuery)
    ]

    return{
        trackEntities:state.entities.tracks,
        activities:state.user.activities,
        requestInProcess:state.request[requestTypes.ACTIVITIES],
        nextHref:state.paginate[paginateLinkTypes.ACTIVITIES],
        activeFilter:getAndCombined(filters),
        activeSort:SORT_FUNCTIONS[state.sort.sortType]
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onFetchActivities:bindActionCreators(actions.fetchActivities,dispatch)
    }
}

StreamActivities.propTypes={
    trackEntities:React.PropTypes.object,
    activities:React.PropTypes.array,
    requestInProcess:React.PropTypes.bool,
    nextHref:React.PropTypes.string,
    activeFilter:React.PropTypes.func,
    activeSort:React.PropTypes.func,
    onFetchActivities:React.PropTypes.func
}

export default connect(mapStateToProps,mapDispatchToProps)(StreamActivities)