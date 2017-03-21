import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { DEFAULT_GENRE } from '../../constants/genre'
import { SORT_FUNCTIONS } from '../../constants/sort'
import { DURATION_FILTER_FUNCTIONS } from '../../constants/durationFilter'
import * as actions from '../../actions'
import * as requestTypes from '../../constants/requestTypes'
import StreamInteactions from '../StreamInteractions'
import Activities from '../Activities'
import LoadingSpinner from '../LoadingSpinner'
import { getTracknameFilter } from '../../constants/nameFilter'
import { getAndCombined } from '../../services/filter'

class Browse extends React.Component {
    constructor(props) {
        super(props)
        this.fetchActivitiesByGenre = this.fetchActivitiesByGenre.bind(this)
    }
    componentDidMount() {
        if (!this.needToFetchActivities()) return;
        this.fetchActivitiesByGenre()
    }
    componentWillUpdate() {
        if (!this.needToFetchActivities()) return;
        this.fetchActivitiesByGenre()
    }

    fetchActivitiesByGenre() {
        const { genre, paginateLinks } = this.props
        const nextHref = paginateLinks[genre]
        this.props.fetchActivitiesByGenre(nextHref, genre)
    }
    needToFetchActivities() {
        const { genre, browseActivities } = this.props
        return !browseActivities[genre] || browseActivities[genre].length < 20
    }

    render() {
        const { browseActivities, genre, requestInProcess, trackEntities, activeFilter, activeSort } = this.props
        return (
            <div className='browse'>
                <StreamInteactions />
                <Activities isLoading={requestInProcess[requestTypes.GENRES] && !browseActivities[genre]}
                    ids={browseActivities[genre]} entities={trackEntities} activeFilter={activeFilter} activeSort={activeSort}
                    scrollFunction={this.fetchActivitiesByGenre} />
                <LoadingSpinner isLoading={!!(requestInProcess[requestTypes.GENRES] && browseActivities[genre])} />
            </div>
        )
    }
}
const mapStateToProps=(state,routerState)=>{
    const filters=[DURATION_FILTER_FUNCTIONS[state.filter.durationFilterType],getTracknameFilter(state.filter.filterNameQuery)]
    return{
        genre:routerState.location.query.genre,
        browseActivities:state.browse,
        requestInProcess:state.request,
        paginateLinks:state.paginate,
        trackEntities:state.entities.tracks,
        userEntities:state.entities.users,
        activeFilter:getAndCombined(filters),
        activeSort:SORT_FUNCTIONS[state.sort.sortType]
    }
}
const mapDispatchToProps=(dispatch)=>{
return{
    fetchActivitiesByGenre:bindActionCreators(actions.fetchActivitiesByGenre,dispatch)
}
}
Browse.propTypes={
    genre:React.PropTypes.string,
    browseActivities:React.PropTypes.object,
    requestInProcess:React.PropTypes.object,
    paginateLinks:React.PropTypes.object,
    trackEntities:React.PropTypes.object,
    userEntities:React.PropTypes.object,
    fetchActivitiesByGenre:React.PropTypes.func
}
Browse.defaultProps={
    genre:DEFAULT_GENRE
}
export default connect(mapStateToProps,mapDispatchToProps)(Browse)