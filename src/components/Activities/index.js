import React from 'react'
import map from '../../services/map'
import filter from 'lodash/fp/filter'
import withFetchOnScroll from '../withFetchOnScroll'
import withLoadingSpinner from '../withLoadingSpinner'
import TrackExtension from '../TrackExtension'
import {TrackStreamContainer} from '../Track'

const Activity=({activity,idx})=>{
    return(
        <li>
            <TrackStreamContainer activity={activity} idx={idx} />
            <TrackExtension activity={activity} />
            </li>
    )
}
const getMatchedEntities=(ids,entities)=>map((id)=>entities[id],ids)
const Activities=({ids,entities,activeFilter,activeSort})=>{
    const matchedEntities= getMatchedEntities(ids,entities)
    const filteredEntities=filter(activeFilter,matchedEntities)
    const sortedEntities=activeSort(filteredEntities)
    return(
        <div>
            <div>
                <ul>
                    {
                        map((activity,key)=>{
                            const activityProps={activity,idx:key,key}
                            return <Activity {...activityProps} />
                        },sortedEntities)
                    }
                    </ul>
                    </div>
                    </div>
    )
}
Activities.propTypes={
    ids:React.PropTypes.array,
    entities:React.PropTypes.object,
    activeFilter:React.PropTypes.func,
    activeSort:React.PropTypes.func
}

export default withLoadingSpinner(withFetchOnScroll(Activities))